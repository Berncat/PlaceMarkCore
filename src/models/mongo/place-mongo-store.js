import { Place } from "./place.js";

export const placeMongoStore = {
  async getAllPlaces() {
    const places = await Place.find().lean();
    return places;
  },

  async addPlace(place) {
    const newPlace = new Place(place);
    const placeObj = await newPlace.save();
    return this.getPlaceById(placeObj._id);
  },

  async getPlacesByThemeId(id) {
    const places = await Place.find({ themeId: id }).lean();
    return places;
  },

  async getPlaceById(id) {
    if (id) {
      const place = await Place.findOne({ _id: id }).lean();
      return place;
    }
    return null;
  },

  async deletePlace(id) {
    try {
      await Place.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deletePlacesByThemeId(id) {
    try {
      await Place.deleteMany({ themeId: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deletePlacesByUserId(id) {
    try {
      await Place.deleteMany({ userId: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAllPlaces() {
    await Place.deleteMany({});
  },

  async updatePlace(place, updatedPlace) {
    const placeToUpdate = await Place.findOne({ _id: place._id });
    placeToUpdate.name = updatedPlace.name;
    placeToUpdate.lon = updatedPlace.lon;
    placeToUpdate.lat = updatedPlace.lat;
    placeToUpdate.desc = updatedPlace.desc;
    await placeToUpdate.save();
  },
};
