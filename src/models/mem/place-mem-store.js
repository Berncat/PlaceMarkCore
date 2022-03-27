import { v4 } from "uuid";

let places = [];

export const placeMemStore = {
  async getAllPlaces() {
    return places;
  },

  async addPlace(themeId, place) {
    place._id = v4();
    place.themeid = themeId;
    places.push(place);
    return place;
  },

  async getPlacesByThemeId(id) {
    return places.filter((place) => place.themeid === id);
  },

  async getPlaceById(id) {
    return places.find((place) => place._id === id);
  },

  async getThemePlaces(themeId) {
    return places.filter((place) => place.themeid === themeId);
  },

  async deletePlace(id) {
    const index = places.findIndex((place) => place._id === id);
    places.splice(index, 1);
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