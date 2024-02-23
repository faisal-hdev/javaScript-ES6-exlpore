const glass = {
  name: "glass",
  color: "golden",
  price: 20,
  isCleaned: true,
};

console.log(glass);
const keys = Object.keys(glass);
// [ 'name', 'color', 'price', 'isCleaned' ]
console.log(keys);

const values = Object.values(glass);
// ["glass", "golden", 20, true];
console.log(values);
