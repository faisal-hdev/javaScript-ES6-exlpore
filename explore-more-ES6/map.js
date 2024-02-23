const numbers = [2, 34, 44, 55, 66, 100];

function doubleIt(num) {
  //   console.log("number now", num);
  return num * 2;
}

const result = numbers.map(doubleIt);
console.log(result);

const outPut = numbers.map((n) => n * 2);
console.log(outPut);

//  map() ===> loop through each element of the element of the the array and do the operation that you passed in the call back function and hold the result from each operation in and array and finally returns you the array.

// const doubled = [];
// for (const num of numbers) {
//   const double = num * 2;
//   doubled.push(double);
// }
// console.log(doubled);
