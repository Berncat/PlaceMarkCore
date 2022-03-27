import { db } from "../models/db.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const themes = await db.themeStore.getAllThemes();
      const viewData = {
        title: "Place Mark Dashboard",
        themes: themes,
      };
      return h.view("dashboard-view", viewData);
    },
  },

  addTheme: {
    handler: async function (request, h) {
      const newTheme = {
        name: request.payload.name,
      };
      await db.themeStore.addTheme(newTheme);
      return h.redirect("/dashboard");
    },
  },

  deleteTheme: {
    handler: async function (request, h) {
      const theme = await db.themeStore.getThemeById(request.params.id);
      await db.themeStore.deleteThemeById(theme._id);
      return h.redirect("/dashboard");
    },
  },

  updateTheme: {
    handler: async function (request, h) {
      const theme = await db.themeStore.getThemeById(request.params.id);
      const updatedTheme = {
        name: request.payload.name,
      };
      await db.themeStore.updateTheme(theme, updatedTheme);
      return h.redirect("/dashboard");
    },
  },
};
