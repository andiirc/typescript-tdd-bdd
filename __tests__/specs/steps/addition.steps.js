"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const assert_1 = __importDefault(require("assert"));
const app_calculator_1 = require("../../../src/app-calculator");
let calculator;
cucumber_1.Given("the numbers {int} and {int}", (numberone, numbertwo) => {
    calculator = new app_calculator_1.Calculator(numberone, numbertwo);
});
cucumber_1.When("they are addition together", () => {
    calculator.addition();
});
cucumber_1.Then("should the result be {int}", (result) => {
    assert_1.default.strictEqual(result, calculator.getResult());
});
