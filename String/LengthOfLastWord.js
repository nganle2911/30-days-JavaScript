// https://leetcode.com/problems/length-of-last-word/description/

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

let s = "luffy is still joyboy";
console.log(lengthOfLastWord(s));