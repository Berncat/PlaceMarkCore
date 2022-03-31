import { v4 } from "uuid";
import { placeMemStore } from "./place-mem-store.js";

let themes = [];

export const themeMemStore = {
  async getAllThemes() {
    return themes;
  },

  async addTheme(theme) {
    theme._id = v4();
    themes.push(theme);
    return theme;
  },

  async getThemeById(id) {
    const list = themes.find((theme) => theme._id === id);
    list.places = await placeMemStore.getPlacesByThemeId(list._id);
    return list;
  },

  async getUserThemes(userId) {
    return themes.filter((theme) => theme.userId === userId);
  },

  async deleteThemeById(id) {
    const index = themes.findIndex((theme) => theme._id === id);
    themes.splice(index, 1);
    placeMemStore.deletePlacesByThemeId(id);
  },

  async deleteUserThemes(userId) {
    themes = themes.filter((theme) => theme.userId !== userId);
    placeMemStore.deletePlacesByUserId(userId);
  },

  async deleteAllThemes() {
    themes = [];
  },

  async updateTheme(theme, updatedTheme) {
    theme.name = updatedTheme.name;
  },
};
