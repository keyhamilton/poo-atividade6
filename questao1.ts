class Calculadora {
    private operando1: number;
    private operando2: number;

    constructor(operandA: number, operandB: number){
        this.operando1 = operandA;
        this.operando2 = operandB;
    };

    /**
     * somar
     * @returns this.operando1 + this.operando2
 : number    */
    public somar(): number {
        return this.operando1 + this.operando2;
    };

    /**
     * multiplicar
     * @returns this.operando1 * this.operando2;
     * : number
     */
    public multiplicar(): number {
        return this.operando1 * this.operando2;
    }
}

let calculadora: Calculadora = new Calculadora(2, 3);

// calculadora.operando1 = 0; causa erro

console.log(calculadora.somar());
console.log(calculadora.multiplicar());



