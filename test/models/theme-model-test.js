import { assert } from "chai";
import { db } from "../../src/models/db.js";
import { database, maggie, testThemes, testTheme } from "../fixtures.js";
import { assertSubset } from "../test-utils.js";

suite("Theme Model tests", () => {
  setup(async () => {
    db.init(database);
    await db.themeStore.deleteAllThemes();
    await db.userStore.deleteAll();
    await db.userStore.addUser(maggie);
    for (let i = 0; i < testThemes.length; i += 1) {
      testThemes[i].userId = maggie._id;
      // eslint-disable-next-line no-await-in-loop
      testThemes[i] = await db.themeStore.addTheme(testThemes[i]);
    }
  });

  teardown(async () => {
    db.init(database);
    await db.themeStore.deleteAllThemes();
    await db.userStore.deleteAll();
  });

  test("create a theme", async () => {
    await db.userStore.addUser(maggie);
    testTheme.userId = maggie._id;
    const theme = await db.themeStore.addTheme(testTheme);
    assertSubset(testTheme, theme);
    assert.isDefined(theme._id);
  });

  test("delete all themes", async () => {
    let returnedThemes = await db.themeStore.getAllThemes();
    assert.equal(returnedThemes.length, 3);
    await db.themeStore.deleteAllThemes();
    returnedThemes = await db.themeStore.getAllThemes();
    assert.equal(returnedThemes.length, 0);
  });

  test("get a theme - success", async () => {
    await db.userStore.addUser(maggie);
    testTheme.userId = maggie._id;
    const theme = await db.themeStore.addTheme(testTheme);
    assertSubset(testTheme, theme);
  });

  test("delete One Theme - success", async () => {
    const id = testThemes[0]._id;
    await db.themeStore.deleteThemeById(id);
    const returnedThemes = await db.themeStore.getAllThemes();
    assert.equal(returnedThemes.length, testThemes.length - 1);
    const deletedTheme = await db.themeStore.getThemeById(id);
    assert.isNull(deletedTheme);
  });

  test("get a theme - bad params", async () => {
    assert.isNull(await db.themeStore.getThemeById(""));
    assert.isNull(await db.themeStore.getThemeById());
  });

  test("delete One Theme - fail", async () => {
    await db.themeStore.deleteThemeById("bad-id");
    const allThemes = await db.themeStore.getAllThemes();
    assert.equal(testThemes.length, allThemes.length);
  });
});
