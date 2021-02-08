"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_calculator_1 = require("../../src/app-calculator");
describe("Calculator ", () => {
    it("addition", () => {
        let calculator = new app_calculator_1.Calculator(1, 1);
        const result = calculator.addition();
        expect(2).toEqual(result);
    });
});
