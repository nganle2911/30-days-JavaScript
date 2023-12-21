// https://leetcode.com/problems/calculator-with-method-chaining/description/

class Calculator {
    constructor(value) {
        this.result = value;
    }

    add(value) {
        this.result += value; 
        return this.result;
    }

    subtract(value) {
        this.result -= value; 
        return this.result;
    }

    multiply(value) {
        this.result *= value;
        return this.result;
    }

    divide(value) {
        if (value === 0) {
            throw new Error("We cannot divide by zero!");
        } else {
            this.result /= value;
            return this.result;
        }
    }

    power(value) {
        this.result = Math.pow(this.result, value);
        return this.result;
    }

    getResult() {
        return this.result; 
    }
}

