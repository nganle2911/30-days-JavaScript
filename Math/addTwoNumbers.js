// https://leetcode.com/problems/add-two-numbers/description/ 

let addTwoNumbers = (l1, l2) => {
    let sum = 0;

    l1 = getNumberFromArr(l1);
    l2 = getNumberFromArr(l2);
    sum = l1 + l2; 

    // convert a number to an array
    let newArr = String(sum).split("").reverse().map((num) => {
        return Number(num);
    });

 
    return newArr; 
}

// todo: convert array to a number 
let getNumberFromArr = (arr) => {
    let num = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        num += arr[i];
    }
    num = Number(num);
  
    return num; 
}

console.log(addTwoNumbers([2,4,3], [5,6,4]));
