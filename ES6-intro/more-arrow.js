const difference = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;

const student = {
  name: "faisal",
  age: 20,
};

const getAge = (person) => person.age;
const age = getAge(student);
console.log(age);
