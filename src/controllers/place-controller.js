import { db } from "../models/db.js";

export const placeController = {
  index: {
    handler: async function (request, h) {
      const theme = await db.themeStore.getThemeById(request.params.id);
      const flag = await placeController.checkUser(request, theme);
      const place = await db.placeStore.getPlaceById(request.params.placeid);
      const viewData = {
        title: "Update",
        theme: theme,
        place: place,
      };
      if (flag) {
        return h.view("place-view", viewData);
      }
      return h.redirect("/logout");
    },
  },

  updatePlace: {
    handler: async function (request, h) {
      const theme = await db.themeStore.getThemeById(request.params.id);
      const flag = await placeController.checkUser(request, theme);
      const place = await db.placeStore.getPlaceById(request.params.placeid);
      const newPlace = request.payload;
      if (flag) {
        await db.placeStore.updatePlace(place, newPlace);
        return h.redirect(`/theme/${request.params.id}`);
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
