// Створити функцію calculate яка має 4 параметри: 2 операнди, операцію і звіт. Якщо звіт не заданий - функція має повернути значення, інакше повернути звіт. Приклади виклику:
// Copy code
// calculate(2, 5, (a, b) => a + b, r => console.log(`Result: ${r}`));
// // функція поверне undefined
// calculate(3, 6, (a, b) => a / b, r => r.toString());
// // функція поверне '0.5'

console.log('Task 2');

const report = (r) => console.log(`Result is ${r}`);

const calculate = (a, b, op, report) => {
  const result = op(a, b);
  if (report) return report(result);
  return result;
};
calculate(3, 6, (a, b) => a / b, (r) => r.toString());

// 3. Напишіть функцію pow(x, n), яка повертає число x, піднесене до степеня n. Функція повинна підтримувати лише натуральні значення n.
console.log('Task 3');
const powPow = (x, n) => {
  n >= 1;
  if (Number.isInteger(n) === true && +n && +x) { return console.log(x ** n); }
  console.log('Invalid Input');
};
powPow(2, 4);

// 4. Розвʼязати задачі:
// https://www.codewars.com/kata/56598d8076ee7a0759000087
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

// 5. Створити функцію sum яка сумує 2 числа. Функція має викликатися наступним чином:
// Copy code
// const result = sum(2)(3);
// // result == 5
console.log('Task 5');

const sum = (a) = (b) => a + b;
const result = sum(2)(3);
