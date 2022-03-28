import { db } from "../models/db.js";

export const themeController = {
  index: {
    handler: async function (request, h) {
      const theme = await db.themeStore.getThemeById(request.params.id);
      const flag = await themeController.checkUser(request, theme);
      const viewData = {
        title: theme.name,
        theme: theme,
      };
      if (flag) {
        return h.view("theme-view", viewData);
      }
      return h.redirect("/logout");
    },
  },

  addPlace: {
    handler: async function (request, h) {
      const theme = await db.themeStore.getThemeById(request.params.id);
      const flag = await themeController.checkUser(request, theme);
      const newPlace = {
        name: request.payload.name,
        lon: request.payload.lon,
        lat: request.payload.lat,
        desc: request.payload.desc,
      };
      if (flag) {
        await db.placeStore.addPlace(theme._id, newPlace);
        return h.redirect(`/theme/${theme._id}`);
      }
      return h.redirect("/logout");
    },
  },

  deletePlace: {
    handler: async function (request, h) {
      const theme = await db.themeStore.getThemeById(request.params.id);
      const flag = await themeController.checkUser(request, theme);
      if (flag) {
        await db.placeStore.deletePlace(request.params.placeid);
        return h.redirect(`/theme/${theme._id}`);
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
