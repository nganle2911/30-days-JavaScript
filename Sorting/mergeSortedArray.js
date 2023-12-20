// https://leetcode.com/problems/merge-sorted-array/description/

let modifyArr = (arr, m) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            i--;
        }
    }

    if (arr.length < m) {
        for (let i = arr.length - 1; i < m - 1; i++) {
            arr.push(0);
        }
    }

    return arr;
}

let sortArr = (a, len) => {
    let temp; 

    for (let i = 0; i < len; i++) {
        for (let j = i+1; j < a.length; j++) {
            if (a[i] > a[j]) {
                temp = a[i];
                a[i] = a[j];
                a[j] = temp; 
            }
        }
    }

    return a; 
}

let merge = (nums1, m, nums2, n) => {
    let arr; 
    let len = m + n;

    nums1 = modifyArr(nums1, m);

    arr = nums1.concat(nums2);
    arr = sortArr(arr, len);

    for (let i = 0; i < arr.length; i++) {
        nums1[i] = arr[i];
    }

    return nums1; 
}

let a = [-1,0,0,3,3,3,0,0,0];
let b = [1,2,2];
console.log(merge(a,6,b,3));