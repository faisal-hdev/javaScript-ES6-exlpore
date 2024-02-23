const products = [
  { id: 1, name: "lenovo", price: 54000 },
  { id: 2, name: "dell", price: 32000 },
  { id: 3, name: "hp", price: 36000 },
  { id: 4, name: "macBook", price: 140000 },
];

// map
const names = products.map((product) => product.name);
// console.log(names);
const prices = products.map((product) => product.price);
// console.log(prices);

// forEach
// products.forEach((p) => console.log(p.id));
const id = products.forEach((p) => p.id); // not work
// console.log(id);

// filter
const expensive = products.filter((product) => product.price > 50000);
// console.log(expensive);

// find
const affordable = products.find((product) => product.price < 50000);
console.log(affordable);

// reduce
const total = products.reduce((acum, current) => acum + current.price, 0);
console.log(total);
