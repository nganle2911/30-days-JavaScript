// https://leetcode.com/problems/length-of-last-word/description/

// todo: By myself 
let lengthOfLastWord = (s) => {
    let count = 0; 
    let arrStr = s.split(" ");

    for (let i = arrStr.length - 1; i >= 0; i--) {
        if (arrStr[i].length === 0) {
            count = 0; 
        } else {
            count += arrStr[i].length; 
            break;
        }
    } 
    
    return count; 
}

// todo: after consulting from others' solutions 
// using trim to remove white space 
let lengthOfLastWord2 = (s) => {
    let newArr = s.trim().split(" ");
    let count = newArr[newArr.length - 1].length;
    return count; 
}

let s = "Hello World";
console.log(lengthOfLastWord2(s));