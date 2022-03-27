import { userMemStore } from "./mem/user-mem-store.js";
import { themeMemStore } from "./mem/theme-mem-store.js";
import { placeMemStore } from "./mem/place-mem-store.js";

export const db = {
  userStore: null,
  themeStore: null,
  placeStore: null,

  init() {
    this.userStore = userMemStore;
    this.themeStore = themeMemStore;
    this.placeStore = placeMemStore;
  },
};
