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
    if (list) {
      list.places = await placeMemStore.getPlacesByThemeId(list._id);
      return list;
    }
    return null;
  },

  async getUserThemes(userId) {
    return themes.filter((theme) => theme.userId === userId);
  },

  async deleteThemeById(id) {
    const index = themes.findIndex((theme) => theme._id === id);
    if (index !== -1) themes.splice(index, 1);
  },

  async deleteUserThemes(userId) {
    themes = themes.filter((theme) => theme.userId !== userId);
  },

  async deleteAllThemes() {
    themes = [];
  },

  async updateTheme(theme, updatedTheme) {
    theme.name = updatedTheme.name;
  },
};
