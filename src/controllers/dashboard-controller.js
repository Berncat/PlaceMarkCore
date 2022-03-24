import { db } from "../models/db.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const places = await db.placeStore.getAllPlaces();
      const viewData = {
        title: "Place Mark Dashboard",
        places: places,
      };
      return h.view("dashboard-view", viewData);
    },
  },

  addPlace: {
    handler: async function (request, h) {
      const newPlace = {
        name: request.payload.name,
      };
      await db.placeStore.addPlace(newPlace);
      return h.redirect("/dashboard");
    },
  },
};