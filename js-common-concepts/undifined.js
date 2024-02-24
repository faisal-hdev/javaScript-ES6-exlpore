/**
 * 8 ways get to undefined
 *
 * 1. variable that is not initialized will give undefined
 * 2. function with no return
 * 3. parameter that is not passed will be undefined
 * 4. if return has nothing on the right side will return undefined
 * 5. property that doesn't exist on an object will give you undefined
 * 6. accessing array elements outside of the index range
 * 7. deleting an element inside an array
 * 8. set a value directly to undefined
 */

let first;

function second(a, b) {
  const total = a + b;
}

const result = second(11, 22);
// console.log(result);

function third(a, b, c, d) {
  const total = a + b + c + d;
  console.log(a, b, c, d);
}

// third(2, 5);

function noNegative(a, b) {
  if (a < 0 || b < 0) {
    return;
  }
  return a + b;
}

const total = noNegative(2, 2);
// console.log(total);

const fifth = { id: 2, name: "Faisal", age: 20 };
// console.log(fifth.age, fifth.salary);

const sixth = [22, 34, 66, 77, 90, 100];
delete sixth[1];
console.log(sixth[1], sixth[5], sixth[200]);
console.log(sixth);

const eighth = undefined;
