import { getAge } from "../../src/plugins/get-age.plugin";

describe("get-age", () => {
  test("getAge should return 35", () => {
    expect(getAge("1985-10-21")).toBe(39);
  });
  test("getAge should return 0 years", () => {
    // lo que hace mockReturnValue es que cuando se llame a la funcion getFullYear de Date, va a retornar 2021
    //y lo que hace spy es que espia la funcion getFullYear de Date
    const spy = jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(2021);
    const age = getAge("2021-10-21");
    expect(age).toBe(0);
    //verificamos si la funcion getFullYear fue llamada
    expect(spy).toHaveBeenCalled();
  });
});
