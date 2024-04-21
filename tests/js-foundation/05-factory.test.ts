import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe("05-factory", () => {
  //le decimos que valores entra  getUUID y getAge
  const getUUID = () => "1234";
  const getAge = () => 35;

  test("buildPerson should return a person", () => {
    //instanciamos la funcion buildMakePerson con los valores de getUUID y getAge
    const buildPerson = buildMakePerson({ getUUID, getAge });
    //creamos un objeto con name y birthdate
    const obj = { name: "John", birthdate: "1985-10-21" };
    //creamos un objeto con los valores de obj y los valores de getUUID y getAge
    const john = buildPerson(obj);

    //verificamos si el objeto john es igual al objeto que esperamos
    expect(john).toEqual({
      id: "1234",
      name: "John",
      birthdate: "1985-10-21",
      age: 35,
    });
  });
});
