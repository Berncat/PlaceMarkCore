import { db } from "../models/db.js";
import { PlaceSpec } from "../models/joi-schemas.js";

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
      const errors = [{ message: "You tried to access a route you are not authorised to visit" }];
      return h.view("login-view", { title: "Route error", errors });
    },
  },

  addPlace: {
    validate: {
      payload: PlaceSpec,
      options: { abortEarly: false },
      failAction: async function (request, h, error) {
        const theme = await db.themeStore.getThemeById(request.params.id);
        return h.view("theme-view", { title: "Add place error", theme, errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const theme = await db.themeStore.getThemeById(request.params.id);
      const flag = await themeController.checkUser(request, theme);
      const loggedInUser = request.auth.credentials;
      const newPlace = request.payload;
      newPlace.userId = loggedInUser._id;
      newPlace.themeId = theme._id;
      if (flag) {
        await db.placeStore.addPlace(newPlace);
        return h.redirect(`/theme/${theme._id}`);
      }
      const errors = [{ message: "You tried to access a route you are not authorised to visit" }];
      return h.view("login-view", { title: "Route error", errors });
    },
  },

  deletePlace: {
    handler: async function (request, h) {
      const theme = await db.themeStore.getThemeById(request.params.id);
      const flag = await themeController.checkUser(request, theme);
      if (flag) {
        await db.placeStore.deletePlace(request.params.placeId);
        return h.redirect(`/theme/${theme._id}`);
      }
      const errors = [{ message: "You tried to access a route you are not authorised to visit" }];
      return h.view("login-view", { title: "Route error", errors });
    },
  },

  async checkUser(request, theme) {
    const loggedInUser = request.auth.credentials;
    const themes = await db.themeStore.getUserThemes(loggedInUser._id);
    return themes.some((check) => check._id === theme._id);
  },
};
