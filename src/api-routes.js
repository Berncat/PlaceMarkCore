import { userApi } from "./api/user-api.js";
import { themeApi } from "./api/theme-api.js";
import { placeApi } from "./api/place-api.js";

export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users/{id}", config: userApi.deleteOne },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },

  { method: "GET", path: "/api/themes", config: themeApi.find },
  { method: "GET", path: "/api/themes/{id}", config: themeApi.findOne },
  { method: "POST", path: "/api/themes", config: themeApi.create },
  { method: "DELETE", path: "/api/themes/{id}", config: themeApi.deleteOne },
  { method: "DELETE", path: "/api/themes", config: themeApi.deleteAll },

  { method: "GET", path: "/api/places", config: placeApi.find },
  { method: "GET", path: "/api/places/{id}", config: placeApi.findOne },
  { method: "POST", path: "/api/places/{id}", config: placeApi.create },
  { method: "DELETE", path: "/api/places/{id}", config: placeApi.deleteOne },
  { method: "DELETE", path: "/api/places", config: placeApi.deleteAll },
];
