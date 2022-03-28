import { db } from "../models/db.js";

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
    handler: async function (request, h) {
      const user = request.payload;
      const users = await db.userStore.getAllUsers();
      const flag = users.some((check) => check.email === user.email);
      if (flag) {
        return h.redirect("/signup");
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
    handler: async function (request, h) {
      const { email, password } = request.payload;
      const user = await db.userStore.getUserByEmail(email);
      if (!user || user.password !== password) {
        return h.redirect("/");
      }
      request.cookieAuth.set({ id: user._id });
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
      return h.view("user-view", viewData);
    },
  },
  updateUser: {
    handler: async function (request, h) {
      const updatedUser = request.payload;
      const loggedInUser = request.auth.credentials;
      const users = await db.userStore.getAllUsers();
      const flag = users.some((check) => check.email === updatedUser.email);
      if (loggedInUser.email !== updatedUser.email) {
        if (flag) {
          return h.redirect("/user");
        }
      }
      await db.userStore.updateUser(loggedInUser, updatedUser);
      return h.redirect("/dashboard");
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
