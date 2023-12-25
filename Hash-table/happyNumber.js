// https://leetcode.com/problems/happy-number/

let digits = (num) => {
    let digits = []; 
    while (num > 0) {
        let digit = num % 10;
        digits.push(digit);
        num = Math.floor(num / 10);
    }
    
    return digits;
}

let isHappy = (n) => {
    let checkNum = new Set();
    
    while (n > 1 && !checkNum.has(n)) {
        checkNum.add(n);
        let newNum = 0;
        let newArr = digits(n);
        newArr.forEach(element => {
            newNum += Math.pow(element, 2);
            n = newNum;
        });
    }

    return n === 1;
}

console.log(isHappy(19));

