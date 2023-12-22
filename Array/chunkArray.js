// https://leetcode.com/problems/chunk-array/description/

let chunk = (arr, size) => {
    let newArr = [];

    if (arr.length === 0) {
        newArr = arr; 
    } else {
        do {
            let newItem = arr.splice(0, size);
            newArr.push(newItem);
        } while (arr.length !== 0);
    }
 
    return newArr;
}

console.log(chunk([], 1));