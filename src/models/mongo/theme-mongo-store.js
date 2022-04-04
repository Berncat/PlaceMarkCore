import { Theme } from "./theme.js";
import { placeMongoStore } from "./place-mongo-store.js";

export const themeMongoStore = {
  async getAllThemes() {
    const themes = await Theme.find().lean();
    return themes;
  },

  async getThemeById(id) {
    if (id) {
      const theme = await Theme.findOne({ _id: id }).lean();
      if (theme) {
        theme.places = await placeMongoStore.getPlacesByThemeId(theme._id);
      }
      return theme;
    }
    return null;
  },

  async addTheme(theme) {
    const newTheme = new Theme(theme);
    const themeObj = await newTheme.save();
    return this.getThemeById(themeObj._id);
  },

  async getUserThemes(id) {
    const themes = await Theme.find({ userId: id }).lean();
    return themes;
  },

  async deleteThemeById(id) {
    try {
      await Theme.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteUserThemes(id) {
    try {
      await Theme.deleteMany({ userId: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAllThemes() {
    await Theme.deleteMany({});
  },

  async updateTheme(theme, updatedTheme) {
    const themeToUpdate = await Theme.findOne({ _id: theme._id });
    themeToUpdate.name = updatedTheme.name;
    await themeToUpdate.save();
  },

  async checkUser(user, theme) {
    const checkThemes = await themeMongoStore.getUserThemes(user._id);
    return checkThemes.some((check) => check._id.toString() === theme._id.toString());
  },
};
