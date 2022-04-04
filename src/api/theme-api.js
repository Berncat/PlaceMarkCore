import Boom from "@hapi/boom";
import { IdSpec, ThemeArraySpec, ThemeSpec, ThemeSpecPlus } from "../models/joi-schemas.js";
import { db } from "../models/db.js";
import { validationError } from "./logger.js";

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
    tags: ["api"],
    response: { schema: ThemeArraySpec, failAction: validationError },
    description: "Get all themes",
    notes: "Returns all themes",
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
    tags: ["api"],
    description: "Find a Theme",
    notes: "Returns a theme",
    validate: { params: { id: IdSpec }, failAction: validationError },
    response: { schema: ThemeSpecPlus, failAction: validationError },
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
    tags: ["api"],
    description: "Create a Theme",
    notes: "Returns the newly created theme",
    validate: { payload: ThemeSpec, failAction: validationError },
    response: { schema: ThemeSpecPlus, failAction: validationError },
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
    tags: ["api"],
    description: "Delete a theme",
    validate: { params: { id: IdSpec }, failAction: validationError },
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
    tags: ["api"],
    description: "Delete all ThemeApi",
  },
};
