import Boom from "@hapi/boom";
import { db } from "../models/db.js";

export const themeApi = {
  find: {
    auth: false,
    handler: async function (request, h) {
      try {
        const themes = await db.themeStore.getAllThemes();
        return themes;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

  findOne: {
    auth: false,
    async handler(request) {
      try {
        const theme = await db.themeStore.getThemeById(request.params.id);
        if (!theme) {
          return Boom.notFound("No Theme with this id");
        }
        return theme;
      } catch (err) {
        return Boom.serverUnavailable("No Theme with this id");
      }
    },
  },

  create: {
    auth: false,
    handler: async function (request, h) {
      try {
        const theme = request.payload;
        const newTheme = await db.themeStore.addTheme(theme);
        if (newTheme) {
          return h.response(newTheme).code(201);
        }
        return Boom.badImplementation("error creating theme");
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

  deleteOne: {
    auth: false,
    handler: async function (request, h) {
      try {
        const theme = await db.themeStore.getThemeById(request.params.id);
        if (!theme) {
          return Boom.notFound("No Theme with this id");
        }
        await db.themeStore.deleteThemeById(theme._id);
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("No Theme with this id");
      }
    },
  },

  deleteAll: {
    auth: false,
    handler: async function (request, h) {
      try {
        await db.themeStore.deleteAllThemes();
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },
};
