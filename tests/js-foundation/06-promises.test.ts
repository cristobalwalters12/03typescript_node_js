import { getPokemonById } from "../../src/js-foundation/06-promises";

describe("06-promises", () => {
  test("getPokemonById should return a pokemon", async () => {
    const id = 1;
    const pokemonName = await getPokemonById(id);
    expect(pokemonName).toBe("bulbasaur");
  });
  test("should throw an error", async () => {
    const id = 1111110;
    try {
      await getPokemonById(id);
      expect(true).toBeFalsy();
    } catch (err) {}
  });
});
