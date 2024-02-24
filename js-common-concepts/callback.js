// const name = "faisal h";
// const number = [45, 33, 44, 55, 66, 70];
// const obj = { price: 45000, brand: "lenovo", memory: "8gb" };

function greetings(greetingHandler, name) {
  greetingHandler(name);
}

function greetingHandler(name) {
  console.log("Good morning", name);
}

function greetEvening(name) {
  console.log("Good evening", name);
}

function greetNight(name) {
  console.log("Good night", name);
}

greetings(greetingHandler, "Tom Hanks");
greetings(greetingHandler, "Faisal hossen");
greetings(greetingHandler, "Tom Cruise");
greetings(greetEvening, "Tom Solaiman");
greetings(greetEvening, "Tom Solman");
greetings(greetNight, "Mr Akkas");
greetings(greetNight, "Ms ruma");
