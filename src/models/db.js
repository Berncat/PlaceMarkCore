import { userMemStore } from "./mem/user-mem-store.js";
import { themeMemStore } from "./mem/theme-mem-store.js";
import { placeMemStore } from "./mem/place-mem-store.js";
import { userJsonStore } from "./json/user-json-store.js";
import { themeJsonStore } from "./json/theme-json-store.js";
import { placeJsonStore } from "./json/place-json-store.js";
import { connectMongo } from "./mongo/connect.js";
import { userMongoStore } from "./mongo/user-mongo-store.js";
import { themeMongoStore } from "./mongo/theme-mongo-store.js";
import { placeMongoStore } from "./mongo/place-mongo-store.js";

export const db = {
  userStore: null,
  themeStore: null,
  placeStore: null,

  init(storeType) {
    switch (storeType) {
      case "json":
        this.userStore = userJsonStore;
        this.themeStore = themeJsonStore;
        this.placeStore = placeJsonStore;
        break;
      case "mongo":
        this.userStore = userMongoStore;
        this.themeStore = themeMongoStore;
        this.placeStore = placeMongoStore;
        connectMongo();
        break;
      default:
        this.userStore = userMemStore;
        this.themeStore = themeMemStore;
        this.placeStore = placeMemStore;
    }
  },
};
