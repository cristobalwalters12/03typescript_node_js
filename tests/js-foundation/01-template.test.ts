import { emailTemplate } from "../../src/js-foundation/01-template";

describe("01-template", () => {
  //le decimos que vamos a testear el email template
  // y si tiene un hi,
  test("email template contain a greeting", () => {
    expect(emailTemplate).toContain(`Hi, `);
  });
  // prueba de que el email template contiene name y orderId
  test("email template should contain {{name}} and {{orderId}}", () => {
    expect(emailTemplate).toMatch(/{{name}}/);
    expect(emailTemplate).toMatch(/{{orderId}}/);
  });
});
