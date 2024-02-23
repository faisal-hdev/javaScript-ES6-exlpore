const numbers = [33, 22, 33, 11, 44, 55];
const total = numbers.reduce((previous, current) => previous + current, 0);
// console.log(total);

const sum = numbers.reduce((p, c) => p + c, 0);
console.log(sum);
