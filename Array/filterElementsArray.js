// https://leetcode.com/problems/filter-elements-from-array/

let filter = (arr, fn) => {
    let newArr = [];

    arr.map((item, index) => {
        if(fn(item, index)) {
            newArr.push(item);
        }
    });

    return newArr;
}

let arr = [-2,-1,0,1,2];
function plusOne(n) { return n + 1 }

console.log(filter(arr, plusOne));