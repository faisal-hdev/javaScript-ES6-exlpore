const actor = {
  age: 50,
  money: "money",
  name: "The rock",
  phone: "12345678910",
};

// if right side is an object left side of destructuring will be object as well.
// use property name is a variable that contains the property value.
const { phone, age } = actor;

// const phone = actor.phone;
// const age = actor.age;
// const name = actor.name;

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(age);
console.log(age);
// console.log(name);
// console.log(name);

// console.log(actor.phone);
// console.log(actor.phone);
// console.log(actor.phone);
// console.log(actor.phone);

// array destructuring.
const numbers = [11, 22, 33, 44, 55, 66];
const [first, second] = numbers;
const [x, y] = [12, 21];

function doubleThem(a, b) {
  return [a * 2, b * 2];
}

const [] = doubleThem(6, 9);
