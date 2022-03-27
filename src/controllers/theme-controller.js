import { db } from "../models/db.js";

export const themeController = {
  index: {
    handler: async function (request, h) {
      const theme = await db.themeStore.getThemeById(request.params.id);
      const viewData = {
        title: theme.name,
        theme: theme,
      };
      return h.view("theme-view", viewData);
    },
  },

  addPlace: {
    handler: async function (request, h) {
      const theme = await db.themeStore.getThemeById(request.params.id);
      const newPlace = {
        name: request.payload.name,
        lon: request.payload.lon,
        lat: request.payload.lat,
        desc: request.payload.desc,
      };
      await db.placeStore.addPlace(theme._id, newPlace);
      return h.redirect(`/theme/${theme._id}`);
    },
  },

  deletePlace: {
    handler: async function(request, h) {
      const theme = await db.themeStore.getThemeById(request.params.id);
      await db.placeStore.deletePlace(request.params.placeid);
      return h.redirect(`/theme/${theme._id}`);
    },
  },
};