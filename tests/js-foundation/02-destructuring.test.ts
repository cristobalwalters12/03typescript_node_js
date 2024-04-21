import { characters } from "../../src/js-foundation/02-destructuring";

describe("02-destructuring", () => {
  test("characters should contain Batman", () => {
    expect(characters).toContain("Batman");
  });
  test("characters should contain Flash, Superman, Green Lantern, Batman", () => {
    expect(characters).toEqual([
      "Flash",
      "Superman",
      "Green Lantern",
      "Batman",
    ]);
  });
});
