import { v4 } from "uuid";

let places = [];

export const placeMemStore = {
  async getAllPlaces() {
    return places;
  },

  async addPlace(place) {
    place._id = v4();
    places.push(place);
    return place;
  },

  async getPlacesByThemeId(themeId) {
    return places.filter((place) => place.themeId === themeId);
  },

  async getPlaceById(id) {
    let p = places.find((place) => place._id === id);
    if (p === undefined) p = null;
    return p;
  },

  async deletePlace(id) {
    const index = places.findIndex((place) => place._id === id);
    if (index !== -1) places.splice(index, 1);
  },

  async deletePlacesByThemeId(themeId) {
    places = places.filter((place) => place.themeId !== themeId);
  },

  async deletePlacesByUserId(userId) {
    places = places.filter((place) => userId !== place.userId);
  },

  async deleteAllPlaces() {
    places = [];
  },

  async updatePlace(place, updatedPlace) {
    place.name = updatedPlace.name;
    place.lon = updatedPlace.lon;
    place.lat = updatedPlace.lat;
    place.desc = updatedPlace.desc;
  },
};
