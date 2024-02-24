function add(a, b) {
  const total = a + b;
  console.log(a, b);
  if (a > 5) {
    const sum = 25 + a + b;
  } else {
    const sum = 5 + a + b;
  }
  console.log(sum);
  return total;
}

console.log(a, b);
add(7, 8);
