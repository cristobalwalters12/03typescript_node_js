import { getUserById } from "../../src/js-foundation/03-callbacks";

describe("03-callbacks", () => {
  test("getUserById should return an user", (done) => {
    getUserById(1, (err, user) => {
      expect(user).toEqual({ id: 1, name: "John Doe" });
      done();
    });
  });

  test("getUserById should return an error", (done) => {
    getUserById(3, (err, user) => {
      expect(err).toBe("User not found with id 3");
      done();
    });
  });
  test("user does not exist", (done) => {
    getUserById(3, (err, user) => {
      expect(user).toBeUndefined();
      done();
    });
  });
});
