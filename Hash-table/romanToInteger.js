/**
 * https://leetcode.com/problems/roman-to-integer/description/ 
 * 
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M
 * I = 1; V = 5; X = 10; L = 50; C = 100; D = 500; M = 1000
 * Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX.
 * There are six instances where subtraction is used:
 * - I can be placed before V (5) and X (10) to make 4 and 9. 
 * - X can be placed before L (50) and C (100) to make 40 and 90. 
 * - C can be placed before D (500) and M (1000) to make 400 and 900.
 */

// TODO: Method 1: By myself 
/* let romanToInt = (str) => {
    let result = 0;

    if (str.length === 1) {
        result = getOneRomanNum(str);
    } else {
        for (let i = str.length - 1; i >= 0; i--) {
            // check if 2 consecutive roman numerals belong to 6 instances of subtraction 
            if (getTwoRomanNums(str[i-1] + str[i])) {
                result += getTwoRomanNums(str[i-1] + str[i]);
                i--;
            } else {
                result += getOneRomanNum(str[i]);
            }
        }
    }

    return result; 
}

let getOneRomanNum = (romanNum) => {
    let result = 0;
    switch (romanNum) {
        case "I":
            result = 1;
            break;
        case "V":
            result = 5;
            break;
        case "X":
            result = 10;
            break;
        case "L":
            result = 50;
            break;
        case "C":
            result = 100;
            break;
        case "D":
            result = 500;
            break;
        case "M":
            result = 1000;
            break;
        default:
            break;
    }

    return result; 
}

let getTwoRomanNums = (romanNums) => {
    let result = 0;

    switch (romanNums) {
        case "IV":
            result = 4;
            break;
        case "IX":
            result = 9;
            break;
        case "XL":
            result = 40;
            break;
        case "XC":
            result = 90;
            break;
        case "CD":
            result = 400;
            break;
        case "CM":
            result = 900;
            break;
        default:
            break;
    }

    return result;
} */


// TODO: Method 2: Reference from others 
const romanNums = {
    "I": 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};

let romanToInt = (s) => {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let current = romanNums[s[i]];
        let next = romanNums[s[i+1]];

        if (current < next) {
            result += (next - current);
            i++;
        } else {
            result += current;
        }
    }

    return result; 
}