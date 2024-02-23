const numbers = [33, 22, 11, 44, 553];

const doubled = numbers.map((num) => num * 2);
// console.log(doubled);
const fiveBonus = numbers.map((num) => num + 5);
// console.log(fiveBonus);
const halves = numbers.map((num) => num / 2);
// console.log(halves);

const friends = ["Tom", "Jhon", "Michel", "Peter", "Deep"];

const lengths = friends.map((friend) => friend.length);
// console.log(lengths);

const firstLetter = friends.map((friend) => friend[0]);
// console.log(firstLetter);

const items = friends.map((friend) => friend);
console.log(items);
