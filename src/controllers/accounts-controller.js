import { db } from "../models/db.js";
import { UserSpec, UserCredentialsSpec } from "../models/joi-schemas.js";

export const accountsController = {
  index: {
    auth: false,
    handler: function (request, h) {
      return h.view("main", { title: "Welcome to Place Mark" });
    },
  },

  showSignup: {
    auth: false,
    handler: function (request, h) {
      return h.view("signup-view", { title: "Sign up for Place Mark" });
    },
  },

  signup: {
    auth: false,
    validate: {
      payload: UserSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("signup-view", { title: "Sign up error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const user = request.payload;
      const users = await db.userStore.getAllUsers();
      const flag = users.some((check) => check.email === user.email);
      if (flag) {
        const errors = [{ message: "email already in use by another user" }];
        return h.view("signup-view", { title: "Sign up error", errors });
      }
      if (user.email === "admin@placemark.com") {
        user.scope = ["admin"];
      }
      await db.userStore.addUser(user);
      return h.redirect("/login");
    },
  },

  showLogin: {
    auth: false,
    handler: function (request, h) {
      return h.view("login-view", { title: "Login to Place Mark" });
    },
  },

  login: {
    auth: false,
    validate: {
      payload: UserCredentialsSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("login-view", { title: "Log in error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const { email, password } = request.payload;
      const user = await db.userStore.getUserByEmail(email);
      if (!user || user.password !== password) {
        return h.redirect("/");
      }
      request.cookieAuth.set({ id: user._id });
      if (user.email === "admin@placemark.com") {
        return h.redirect("/admin/dashboard");
      }
      return h.redirect("/dashboard");
    },
  },

  logout: {
    auth: false,
    handler: function (request, h) {
      request.cookieAuth.clear();
      return h.redirect("/");
    },
  },

  showUser: {
    handler: function (request, h) {
      const loggedInUser = request.auth.credentials;
      const viewData = {
        title: "User Dashboard",
        user: loggedInUser,
      };
      if (loggedInUser.email === "admin@placemark.com") {
        const errors = [{ message: "Admin User cannot be updated" }];
        return h.view("admin-login-view", { title: "Update user error", errors });
      }
      return h.view("user-view", viewData);
    },
  },

  updateUser: {
    validate: {
      payload: UserSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        const loggedInUser = request.auth.credentials;
        return h.view("user-view", { title: "Update user error", user: loggedInUser, errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const updatedUser = request.payload;
      const loggedInUser = request.auth.credentials;
      const users = await db.userStore.getAllUsers();
      const flag = users.some((check) => check.email === updatedUser.email);
      if (loggedInUser.email === "admin@placemark.com") {
        const errors = [{ message: "Admin User cannot be updated" }];
        return h.view("admin-login-view", { title: "Update user error", errors });
      }
      if (loggedInUser.email !== updatedUser.email) {
        if (flag) {
          const errors = [{ message: "email already in use by another user" }];
          return h.view("user-view", { title: "Update user error", user: loggedInUser, errors });
        }
      }
      await db.userStore.updateUser(loggedInUser, updatedUser);
      return h.redirect("/user");
    },
  },

  async validate(request, session) {
    const user = await db.userStore.getUserById(session.id);
    if (!user) {
      return { valid: false };
    }
    return { valid: true, credentials: user };
  },
};
