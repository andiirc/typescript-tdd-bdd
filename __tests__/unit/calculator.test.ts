import { Calculator } from "../../src/app-calculator"

describe("Calculator ", () => {

it("addition", () => {

    let calculator = new Calculator(1,1)

    const result = calculator.addition();

    expect(2).toEqual(result);
  });

});