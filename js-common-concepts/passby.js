let num1 = 5;
let num2 = 7;

function multiply(a, b) {
  a = 27;
  const result = a * b;
  return result;
}

console.log(num1);
const output = multiply(num1, num2);
console.log(output);

let student1 = { name: "jalil", partner: "borsha" };
let student2 = { name: "raaz", partner: "anika" };

function makeMove(couple1, couple2) {
  couple1.name = "Ononto";
  couple2.partner = "MiM";
}

console.log(student1, student2);
makeMove(student1, student2);
console.log(student1, student2);
