import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { placemarkService } from "./placemark-service.js";
import { maggie, testTheme, testPlaces, testPlace } from "../fixtures.js";

suite("Place API tests", () => {
  let user = null;
  let testThemeList = null;

  setup(async () => {
    await placemarkService.deleteAllPlaces();
    await placemarkService.deleteAllThemes();
    await placemarkService.deleteAllUsers();
    user = await placemarkService.createUser(maggie);
    testTheme.userId = user._id;
    testThemeList = await placemarkService.createTheme(testTheme);
    testPlace.themeId = testThemeList._id;
    testPlace.userId = user._id;
  });

  teardown(async () => {
    await placemarkService.deleteAllPlaces();
    await placemarkService.deleteAllThemes();
    await placemarkService.deleteAllUsers();
  });

  test("create place", async () => {
    const returnedPlace = await placemarkService.createPlace(testPlace);
    assertSubset(testPlace, returnedPlace);
  });

  test("create Multiple places", async () => {
    for (let i = 0; i < testPlaces.length; i += 1) {
      testPlaces[i].userId = user._id;
      testPlaces[i].themeId = testThemeList._id;
      // eslint-disable-next-line no-await-in-loop
      await placemarkService.createPlace(testPlaces[i]);
    }
    const returnedPlaces = await placemarkService.getAllPlaces();
    assert.equal(returnedPlaces.length, testPlaces.length);
    for (let i = 0; i < returnedPlaces.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const place = await placemarkService.getPlace(returnedPlaces[i]._id);
      assertSubset(place, returnedPlaces[i]);
    }
  });

  test("Delete PlaceApi", async () => {
    for (let i = 0; i < testPlaces.length; i += 1) {
      testPlaces[i].userId = user._id;
      // eslint-disable-next-line no-await-in-loop
      await placemarkService.createPlace(testPlaces[i]);
    }
    let returnedPlaces = await placemarkService.getAllPlaces();
    assert.equal(returnedPlaces.length, testPlaces.length);
    for (let i = 0; i < returnedPlaces.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const place = await placemarkService.deletePlace(returnedPlaces[i]._id);
    }
    returnedPlaces = await placemarkService.getAllPlaces();
    assert.equal(returnedPlaces.length, 0);
  });

  test("denormalised theme", async () => {
    for (let i = 0; i < testPlaces.length; i += 1) {
      testPlaces[i].userId = user._id;
      testPlaces[i].themeId = testThemeList._id;
      // eslint-disable-next-line no-await-in-loop
      await placemarkService.createPlace(testPlaces[i]);
    }
    const returnedTheme = await placemarkService.getTheme(testThemeList._id);
    assert.equal(returnedTheme.places.length, testPlaces.length);
    for (let i = 0; i < testPlaces.length; i += 1) {
      assertSubset(testPlaces[i], returnedTheme.places[i]);
    }
  });
});
