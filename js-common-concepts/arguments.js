function sum(a, b, c, d) {
  const agrs = [...arguments];
  console.log(agrs);
  const result = a + b + c + d;
  return result;
}

// console.log(arguments);
const total = sum(21, 42, 35, 85, 99, 88);
console.log(total);
console.log(sum.length);
