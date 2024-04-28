for (let i = 0; i < 10; i++) {
  const n = 9;
  const star = '*'.repeat(2 * i + 1);
  const space = ' '.repeat(n - i);
  console.log(space + star);
}

/// /////////
let a = 10;
let b = 100;
const c = b;
b = a;
a = c;
console.log(`A is ${a}, B is ${b}`);
