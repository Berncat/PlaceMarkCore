import { db } from "../models/db.js";
import { ThemeSpec } from "../models/joi-schemas.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const themes = await db.themeStore.getUserThemes(loggedInUser._id);
      const viewData = {
        title: "Place Mark Dashboard",
        user: loggedInUser,
        themes: themes,
      };
      return h.view("dashboard-view", viewData);
    },
  },

  addTheme: {
    validate: {
      payload: ThemeSpec,
      options: { abortEarly: false },
      failAction: async function (request, h, error) {
        const loggedInUser = request.auth.credentials;
        const themes = await db.themeStore.getUserThemes(loggedInUser._id);
        return h.view("dashboard-view", { title: "Add Theme error", themes, errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const newTheme = {
        userId: loggedInUser._id,
        name: request.payload.name,
      };
      await db.themeStore.addTheme(newTheme);
      return h.redirect("/dashboard");
    },
  },

  deleteTheme: {
    handler: async function (request, h) {
      const theme = await db.themeStore.getThemeById(request.params.id);
      const flag = await dashboardController.checkUser(request, theme);
      if (flag) {
        await db.themeStore.deleteThemeById(theme._id);
        return h.redirect("/dashboard");
      }
      return h.redirect("/logout");
    },
  },

  updateTheme: {
    validate: {
      payload: ThemeSpec,
      options: { abortEarly: false },
      failAction: async function (request, h, error) {
        const loggedInUser = request.auth.credentials;
        const themes = await db.themeStore.getUserThemes(loggedInUser._id);
        return h.view("dashboard-view", { title: "Update Theme error", themes, errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const theme = await db.themeStore.getThemeById(request.params.id);
      const flag = await dashboardController.checkUser(request, theme);
      const updatedTheme = {
        name: request.payload.name,
      };
      if (flag) {
        await db.themeStore.updateTheme(theme, updatedTheme);
        return h.redirect("/dashboard");
      }
      return h.redirect("/logout");
    },
  },

  async checkUser(request, theme) {
    const loggedInUser = request.auth.credentials;
    const themes = await db.themeStore.getUserThemes(loggedInUser._id);
    return themes.some((check) => check._id === theme._id);
  },
};
