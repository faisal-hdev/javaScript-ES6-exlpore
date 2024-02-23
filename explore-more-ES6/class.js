const products = [
  { id: 1, name: "lenovo", price: 54000 },
  { id: 2, name: "dell", price: 32000 },
  { id: 3, name: "hp", price: 36000 },
  { id: 4, name: "macBook", price: 140000 },
];

// has some properties method
class Product {
  country = "Bangladesh";
  speak(talk) {
    console.log(`Talking about ${talk}`);
  }
}

const lenovo = new Product();
console.log(lenovo);
