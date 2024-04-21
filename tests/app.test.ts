describe("test in the app file ", () => {
  it("should be 30", () => {
    //1. Arrange
    //preparar todo lo que hara el test
    const num1 = 10;
    const num2 = 20;
    //2. Act
    //llamar a la funcion que se va a testear
    const result = num1 + num2;
    //3. Assert
    //verificar si el resultado es el esperado
    expect(result).toBe(30);
  });
});
