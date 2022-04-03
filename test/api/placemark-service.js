import axios from "axios";

import { serviceUrl } from "../fixtures.js";

export const placemarkService = {
  placemarkUrl: serviceUrl,

  async createUser(user) {
    const res = await axios.post(`${this.placemarkUrl}/api/users`, user);
    return res.data;
  },

  async getUser(id) {
    const res = await axios.get(`${this.placemarkUrl}/api/users/${id}`);
    return res.data;
  },

  async getAllUsers() {
    const res = await axios.get(`${this.placemarkUrl}/api/users`);
    return res.data;
  },

  async deleteAllUsers() {
    const res = await axios.delete(`${this.placemarkUrl}/api/users`);
    return res.data;
  },

  async createTheme(theme) {
    const res = await axios.post(`${this.placemarkUrl}/api/themes`, theme);
    return res.data;
  },

  async deleteAllThemes() {
    const response = await axios.delete(`${this.placemarkUrl}/api/themes`);
    return response.data;
  },

  async deleteTheme(id) {
    const response = await axios.delete(`${this.placemarkUrl}/api/themes/${id}`);
    return response;
  },

  async getAllThemes() {
    const res = await axios.get(`${this.placemarkUrl}/api/themes`);
    return res.data;
  },

  async getTheme(id) {
    const res = await axios.get(`${this.placemarkUrl}/api/themes/${id}`);
    return res.data;
  },

  async getAllPlaces() {
    const res = await axios.get(`${this.placemarkUrl}/api/places`);
    return res.data;
  },

  async createPlace(id, place) {
    const res = await axios.post(`${this.placemarkUrl}/api/places/${id}`, place);
    return res.data;
  },

  async deleteAllPlaces() {
    const res = await axios.delete(`${this.placemarkUrl}/api/places`);
    return res.data;
  },

  async getPlace(id) {
    const res = await axios.get(`${this.placemarkUrl}/api/places/${id}`);
    return res.data;
  },

  async deletePlace(id) {
    const res = await axios.delete(`${this.placemarkUrl}/api/places/${id}`);
    return res.data;
  },
};
