class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sleep() {
    console.log(`Sleeping now ${this.name} `);
  }
  activity() {
    this.sleep();
  }
}

const kodom = new Person("Kodom ali", 20);
console.log(kodom);
kodom.sleep();
const badam = new Person("Kacha badam", 22);
badam.sleep();
console.log();
