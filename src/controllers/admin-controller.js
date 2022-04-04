import { db } from "../models/db.js";
import { AdminCredentialsSpec } from "../models/joi-schemas.js";

export const adminController = {
  index: {
    auth: false,
    handler: function (request, h) {
      return h.view("admin-login-view", { title: "Admin" });
    },
  },

  login: {
    auth: false,
    validate: {
      payload: AdminCredentialsSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("admin-login-view", { title: "Admin log in error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const { password } = request.payload;
      const admin = await db.userStore.getUserByEmail("admin@placemark.com");
      if (admin.password !== password) {
        return h.redirect("/");
      }
      request.cookieAuth.set({ id: user._id });
      return h.redirect("admin/dashboard");
    },
  },

  dashboard: {
    auth: {
      scope: ["admin"]
    },
    handler: async function (request, h) {
      const users = await db.userStore.getAllUsers();
      const viewData = {
        title: "Admin Dashboard",
        users: users,
      };
      return h.view("admin-dashboard-view", viewData);
    },
  },

  deleteUser: {
    auth: {
      scope: ["admin"]
    },
    handler: async function (request, h) {
      const admin = await db.userStore.getUserByEmail("admin@placemark.com");
      const users = await db.userStore.getAllUsers();
      if (admin._id.toString() === request.params.id) {
        const errors = [{ message: "Admin User cannot be deleted" }];
        return h.view("admin-dashboard-view", { title: "Admin error", users, errors });
      }
      await db.placeStore.deletePlacesByUserId(request.params.id);
      await db.themeStore.deleteUserThemes(request.params.id);
      await db.userStore.deleteUserById(request.params.id);
      return h.redirect("/admin/dashboard");
    },
  },
};
