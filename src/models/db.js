// import { userMemStore } from "./mem/user-mem-store.js";
// import { themeMemStore } from "./mem/theme-mem-store.js";
// import { placeMemStore } from "./mem/place-mem-store.js";

import { userJsonStore } from "./json/user-json-store.js";
import { themeJsonStore } from "./json/theme-json-store.js";
import { placeJsonStore } from "./json/place-json-store.js";

export const db = {
  userStore: null,
  themeStore: null,
  placeStore: null,

  init() {
    // this.userStore = userMemStore;
    // this.themeStore = themeMemStore;
    // this.placeStore = placeMemStore;
    this.userStore = userJsonStore;
    this.themeStore = themeJsonStore;
    this.placeStore = placeJsonStore;
  },
};
