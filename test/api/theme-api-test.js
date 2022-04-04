import { assert } from "chai";
import { placemarkService } from "./placemark-service.js";
import { assertSubset } from "../test-utils.js";
import { maggie, testTheme, testThemes } from "../fixtures.js";

suite("Theme API tests", () => {
  let user = null;

  setup(async () => {
    await placemarkService.deleteAllThemes();
    await placemarkService.deleteAllUsers();
    user = await placemarkService.createUser(maggie);
    testTheme.userId = user._id;
  });

  teardown(async () => {
    await placemarkService.deleteAllThemes();
    await placemarkService.deleteAllUsers();
  });

  test("create theme", async () => {
    const returnedTheme = await placemarkService.createTheme(testTheme);
    assert.isNotNull(returnedTheme);
    assertSubset(testTheme, returnedTheme);
  });

  test("delete a theme", async () => {
    const theme = await placemarkService.createTheme(testTheme);
    const response = await placemarkService.deleteTheme(theme._id);
    assert.equal(response.status, 204);
    try {
      const returnedTheme = await placemarkService.getTheme(theme.id);
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No Theme with this id", "Incorrect Response Message");
    }
  });

  test("create multiple themes", async () => {
    for (let i = 0; i < testThemes.length; i += 1) {
      testThemes[i].userId = user._id;
      // eslint-disable-next-line no-await-in-loop
      await placemarkService.createTheme(testThemes[i]);
    }
    let returnedLists = await placemarkService.getAllThemes();
    assert.equal(returnedLists.length, testThemes.length);
    await placemarkService.deleteAllThemes();
    returnedLists = await placemarkService.getAllThemes();
    assert.equal(returnedLists.length, 0);
  });

  test("remove non-existant theme", async () => {
    try {
      const response = await placemarkService.deleteTheme("not an id");
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No Theme with this id", "Incorrect Response Message");
    }
  });
});
