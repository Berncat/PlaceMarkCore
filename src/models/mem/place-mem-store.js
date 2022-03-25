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

  async getPlaceById(id) {
    return places.find((place) => place._id === id);
  },

  async deletePlaceById(id) {
    const index = places.findIndex((place) => place._id === id);
    places.splice(index, 1);
  },

  async deleteAllPlaces() {
    places = [];
  },
};
