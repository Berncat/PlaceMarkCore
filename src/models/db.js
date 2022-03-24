import { userMemStore } from "./mem/user-mem-store.js";
import { placeMemStore } from "./mem/place-mem-store.js";

export const db = {
  userStore: null,
  placeStore: null,

  init() {
    this.userStore = userMemStore;
    this.placeStore = placeMemStore;
  },
};
