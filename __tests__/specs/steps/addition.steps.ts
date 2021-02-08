import { Given, When, Then  } from "cucumber";
import assert from  "assert"
import { Calculator } from "../../../src/app-calculator"
    
    let calculator: Calculator;

    Given("the numbers {int} and {int}", (numberone:number, numbertwo:number)=> {    
         calculator = new Calculator(numberone, numbertwo)
     });
 
     When("they are addition together", ()=> {
         calculator.addition()
     });
         
     Then("should the result be {int}", (result:number)=>{
         assert.strictEqual(result, calculator.getResult());
     });