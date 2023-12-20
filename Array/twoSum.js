// https://leetcode.com/problems/two-sum/description/

let twoSums = (nums, target) => {
    let result = []; 
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result = [i, j];
                console.log(result);
                return result;
            }
        }
    }
    return -1; 
}

twoSums([2,7,11,15], 9);