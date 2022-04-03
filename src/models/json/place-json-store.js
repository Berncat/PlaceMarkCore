import { v4 } from "uuid";
// eslint-disable-next-line import/no-unresolved
import { JSONFile, Low } from "lowdb";

const db = new Low(new JSONFile("./src/models/json/places.json"));
db.data = { places: [] };

export const placeJsonStore = {
  async getAllPlaces() {
    await db.read();
    return db.data.places;
  },

  async addPlace(place) {
    await db.read();
    place._id = v4();
    db.data.places.push(place);
    await db.write();
    return place;
  },

  async getPlacesByThemeId(id) {
    await db.read();
    return db.data.places.filter((place) => place.themeId === id);
  },

  async getPlaceById(id) {
    await db.read();
    let p = db.data.places.find((place) => place._id === id);
    if (p === undefined) p = null;
    return p;
  },

  async getThemePlaces(themeId) {
    await db.read();
    return db.data.places.filter((place) => place.themeId === themeId);
  },

  async deletePlace(id) {
    await db.read();
    const index = db.data.places.findIndex((place) => place._id === id);
    if (index !== -1) db.data.places.splice(index, 1);
    await db.write();
  },

  async deletePlacesByThemeId(themeId) {
    await db.read();
    db.data.places = db.data.places.filter((place) => place.themeId !== themeId);
    await db.write();
  },

  async deletePlacesByUserId(userId) {
    await db.read();
    db.data.places = db.data.places.filter((place) => userId !== place.userId);
    await db.write();
  },

  async deleteAllPlaces() {
    db.data.places = [];
    await db.write();
  },

  async updatePlace(place, updatedPlace) {
    place.name = updatedPlace.name;
    place.lon = updatedPlace.lon;
    place.lat = updatedPlace.lat;
    place.desc = updatedPlace.desc;
    await db.write();
  },
};