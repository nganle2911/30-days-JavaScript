// https://leetcode.com/problems/plus-one/description/

let plusOne = (digits) => {
    let result = [];

    // convert digits to a number
    let number = BigInt(digits.join(""));

    // increment number by 1
    let incrementNum = number + BigInt(1);

    // convert incrementNum to a string => convert to an array  
    let newArr = incrementNum.toString().split("");

    // convert each item in newArr to a number
    newArr.forEach((item) => {
        let newItem = Number(item);
        result.push(newItem);
    });

    console.log(result);
    return result;
    
}

let plusOne2 = (arr) => {
    let result = arr;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < 9) {
            arr[i] += 1; 
            result = arr;
            return result;
        } else {
            arr[i] = 0;
        }
    }
    result.unshift(1);
    return result;
}

console.log(plusOne2([9]));




