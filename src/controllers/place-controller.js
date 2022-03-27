import { db } from "../models/db.js";

export const placeController = {
  index: {
    handler: async function (request, h) {
      const theme = await db.themeStore.getThemeById(request.params.id);
      const place = await db.placeStore.getPlaceById(request.params.placeid);
      const viewData = {
        title: "Update",
        theme: theme,
        place: place,
      };
      return h.view("place-view", viewData);
    },
  },

  updatePlace: {
    handler: async function (request, h) {
      const place = await db.placeStore.getPlaceById(request.params.placeid);
      const newPlace = {
        name: request.payload.name,
        lon: request.payload.lon,
        lat: request.payload.lat,
        desc: request.payload.desc,
      };
      await db.placeStore.updatePlace(place, newPlace);
      return h.redirect(`/theme/${request.params.id}`);
    },
  },
};