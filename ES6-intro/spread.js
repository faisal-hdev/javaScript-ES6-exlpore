const max = Math.max(12, 14, 11, 44, 10, 98);
console.log(max);

const numbers = [4, 11, 55, 22, 67, 300];
const arrayMax = Math.max(...numbers);
// console.log(...numbers);
console.log(arrayMax);

// use operator to copy
const nums = [2, 4, 5, 6, 10];
const nums2 = nums;
// nums2.push(12);
const nums3 = [...nums];
console.log(nums3);
nums3.push(100);
console.log(nums);
console.log(nums3);

// advanced
