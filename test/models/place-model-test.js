import { assert } from "chai";
import { db } from "../../src/models/db.js";
import { database, maggie, testThemes, testTheme, testTheme2, testPlaces, testPlace } from "../fixtures.js";
import { assertSubset } from "../test-utils.js";

suite("Place Model tests", () => {
  let testThemeList = null;

  setup(async () => {
    db.init(database);
    await db.placeStore.deleteAllPlaces();
    await db.themeStore.deleteAllThemes();
    await db.userStore.deleteAll();
    const newUser = await db.userStore.addUser(maggie);
    testThemeList = await db.themeStore.addTheme(newUser._id, testTheme);
    for (let i = 0; i < testPlaces.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      testPlaces[i] = await db.placeStore.addPlace(newUser._id, testThemeList._id, testPlaces[i]);
    }
  });

  teardown(async () => {
    db.init(database);
    await db.placeStore.deleteAllPlaces();
    await db.themeStore.deleteAllThemes();
    await db.userStore.deleteAll();
    console.log("Teardown");
    console.log("Places: ", await db.placeStore.getAllPlaces());
    console.log("Themes: ", await db.themeStore.getAllThemes());
    console.log("Users:  ", await db.userStore.getAllUsers());
  });

  test("create single place", async () => {
    const newUser = await db.userStore.addUser(maggie);
    const testTheme2List = await db.themeStore.addTheme(newUser._id, testTheme2);
    const place = await db.placeStore.addPlace(newUser._id, testTheme2List._id, testPlace);
    assert.isNotNull(place._id);
    assertSubset(testPlace, place);
  });

  test("get multiple places", async () => {
    const places = await db.placeStore.getPlacesByThemeId(testThemeList._id);
    assert.equal(testPlaces.length, testPlaces.length);
  });

  test("delete all places", async () => {
    const places = await db.placeStore.getAllPlaces();
    assert.equal(testPlaces.length, places.length);
    await db.placeStore.deleteAllPlaces();
    const newPlaces = await db.placeStore.getAllPlaces();
    assert.equal(0, newPlaces.length);
  });

  test("get a place - success", async () => {
    const newUser = await db.userStore.addUser(maggie);
    const testTheme2List = await db.themeStore.addTheme(newUser._id, testTheme2);
    const place = await db.placeStore.addPlace(newUser._id, testTheme2List._id, testPlace);
    const newPlace = await db.placeStore.getPlaceById(place._id);
    assertSubset(testPlace, newPlace);
  });

  test("delete One Place - success", async () => {
    await db.placeStore.deletePlace(testPlaces[0]._id);
    const places = await db.placeStore.getAllPlaces();
    assert.equal(places.length, testThemes.length - 1);
    const deletedPlace = await db.placeStore.getPlaceById(testPlaces[0]._id);
    assert.isNull(deletedPlace);
  });

  test("get a place - bad params", async () => {
    assert.isNull(await db.placeStore.getPlaceById(""));
    assert.isNull(await db.placeStore.getPlaceById());
  });

  test("delete one place - fail", async () => {
    await db.placeStore.deletePlace("bad-id");
    const places = await db.placeStore.getAllPlaces();
    assert.equal(places.length, testPlaces.length);
  });
});
