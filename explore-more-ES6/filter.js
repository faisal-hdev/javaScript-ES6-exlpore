// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition
const numbers = [22, 33, 444, 55, 66];
const players = [75, 65, 67, 72, 55, 59, 100];

// const selected = players.filter((p) => p > 70);
// const selected = players.filter((p) => p > 100);
// const selected = players.filter((p) => p > 50);
const selected = players.filter((p) => p % 2 === 1);
// console.log(selected);

const friends = ["Tom", "Jhon", "Michel", "Peter", "Deep", "Tim"];
const oddFriends = friends.filter((friend) => friend.length <= 4);
console.log(oddFriends);
