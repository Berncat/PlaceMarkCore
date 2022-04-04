import { v4 } from "uuid";
// eslint-disable-next-line import/no-unresolved
import { JSONFile, Low } from "lowdb";
import { placeJsonStore } from "./place-json-store.js";

const db = new Low(new JSONFile("./src/models/json/themes.json"));
db.data = { themes: [] };

export const themeJsonStore = {
  async getAllThemes() {
    await db.read();
    return db.data.themes;
  },

  async addTheme(theme) {
    await db.read();
    theme._id = v4();
    db.data.themes.push(theme);
    await db.write();
    return theme;
  },

  async getThemeById(id) {
    await db.read();
    let list = db.data.themes.find((theme) => theme._id === id);
    if (list) {
      list.places = await placeJsonStore.getPlacesByThemeId(list._id);
    } else {
      list = null;
    }
    return list;
  },

  async getUserThemes(userId) {
    await db.read();
    return db.data.themes.filter((theme) => theme.userId === userId);
  },

  async deleteThemeById(id) {
    await db.read();
    const index = db.data.themes.findIndex((theme) => theme._id === id);
    if (index !== -1) db.data.themes.splice(index, 1);
    await db.write();
  },

  async deleteUserThemes(userId) {
    await db.read();
    themes = db.data.themes.filter((theme) => theme.userId !== userId);
    await db.write();
  },

  async deleteAllThemes() {
    db.data.themes = [];
    await db.write();
  },

  async updateTheme(theme, updatedTheme) {
    const themeToUpdate = db.data.themes.find((update) => update._id === theme._id);
    themeToUpdate.name = updatedTheme.name;
    await db.write();
  },

  async checkUser(user, theme) {
    const checkThemes = await themeJsonStore.getUserThemes(user._id);
    return checkThemes.some((check) => check._id === theme._id);
  },
};
