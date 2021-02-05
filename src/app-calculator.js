"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
class Calculator {
    constructor(numone, numtwo) {
        this.result = 0;
        this.numone = numone;
        this.numtwo = numtwo;
    }
    addition() {
        return this.result = this.numone + this.numtwo;
    }
    subtraction() {
        return this.result = this.numone - this.numtwo;
    }
    getResult() {
        return this.result;
    }
}
exports.Calculator = Calculator;
