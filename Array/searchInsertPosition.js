// https://leetcode.com/problems/search-insert-position/description/

let searchInsert = (nums, target) => {
    let temp = 0; 
    let outIndex = 0; 
    for (let i = 0; i < nums.length; i++) {
        if (target < nums[i]) {
            temp = nums[i];
            nums[i] = target;
            nums[i+1] = temp;
        } else if (target === nums[i]) {
            outIndex = i; 
            break;
        }
    }

    nums.forEach((element, index) => {
        if (element === target) {
            outIndex = index;
        }
    });

    return outIndex; 
}

console.log(searchInsert([1,3,5,6], 2));