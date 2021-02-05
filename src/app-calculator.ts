export class Calculator{

    private result: number = 0
    numone: number
    numtwo: number

    constructor(numone:number, numtwo:number){
       this.numone = numone
       this.numtwo = numtwo
      }

      addition():number{
        return this.result = this.numone + this.numtwo
      }   

      subtraction():number{
         return this.result = this.numone - this.numtwo
      }

      getResult(): number{
         return this.result
      }

}