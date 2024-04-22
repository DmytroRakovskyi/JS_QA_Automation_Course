/* Task 1
Створити функцію getUniqueElements яка отримує масив (примітивів) і повертає масив без дублікатів. Наприклад getUniqueElements([2, 7, 7, 5, 4, 2, 7]) має повернути [2, 7, 5, 4]. Використання Set заборонено. */
console.log('Task 1');

const getUniqueElements = (arr) => {
  const noDuplicatesArr = [];
  for (const el of arr) {
    if (noDuplicatesArr.indexOf(el) === -1) { noDuplicatesArr.push(el); }
  }
  return noDuplicatesArr;
};
getUniqueElements([2, 7, 7, 5, 4, 2, 7]);
console.log(getUniqueElements([2, 7, 7, 5, 4, 2, 7]));

/* Task 2
Створити функцію sum яка отримує масив чисел і повертає суму елементів масиву. Наприклад sum([1, 1, 4, 3]) має повернути 9. */
console.log('Task 2');

const sum = (arr) => {
  let total = 0;
  for (const el of arr) {
    total += el;
  }
  return total;
};

sum([1, 1, 4, 3]);
console.log(sum([1, 1, 4, 3]));
/* Створити функцію partialReverse яка отримує масив і повертає масив у якому всі елементи крім першого і останнього мають зворотній порядок.
Створити функцію glueArrays яка приймає у якості параметрів 2 масиви і повертає масив або null, приклади:  glueArrays([1,2,3,4], [4,5,8,6]) має повернути [1,2,3,4,5,8,6], glueArrays([1,2,3,3], [3,3,8,6]) має повернути [1,2,3,3,3,8,6], glueArrays([1,2,3,4], [5,2,8,6]) має повернути null.
Написати функцію яка змінює порядок літер в рядку на зворотній. Використовувати методи reverse, toReversed заборонено.
Написати функцію яка повертає true якщо всі елементи масива не мають дублікатів. У іншому випадку функція має повертати false. Використання Set заборонено.
Написати функцію removeNegative яка прибирає з масиву чисел негативні елементи. Наприклад removeNegative([-2,4,3,-10,0,3]) має повернути [4,3,0,3]. Використання filter заборонено.
https://www.codewars.com/kata/5679aa472b8f57fb8c000047/javascript

Створити функцію partialReverse яка отримує масив і повертає масив у якому всі елементи крім першого і останнього мають зворотній порядок. */
console.log('Task 3');

/* const partialReverse = (arr) => {
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (i !== 0 && i !== arr.length - 1)
    newArr.push(arr[i]);
}
newArr.reverse();
newArr.unshift(arr[0]);
newArr.push(arr[arr.length - 1]);
return newArr
}
partialReverse(['first', 'second', 'third', 'four'])
console.log(partialReverse(['first', 'second', 'third', 'four'])) */

/* const partialReverse = (arr) => {
let newArr = [];
for (let el of arr) {
    newArr.push(el);
}
newArr.splice(0,1);
newArr.splice(-1,1);
newArr.reverse();
newArr.unshift(arr[0]);
newArr.push(arr[arr.length - 1]);
return newArr
}
const result = partialReverse(['first', 'second', 'third', 'four']);
console.log(partialReverse(result)); */

const partialReverse = (arr) => {
  const newArr = arr.slice();
  newArr.shift();
  newArr.pop();
  newArr.reverse();
  newArr.unshift(arr.at(0));
  newArr.push(arr.at(-1));
  return newArr;
};
const result = partialReverse(['first', 'second', 'third', 'four']);
console.log(result);

/* Створити функцію glueArrays яка приймає у якості параметрів 2 масиви і повертає масив або null, приклади:  glueArrays([1,2,3,4], [4,5,8,6]) має повернути [1,2,3,4,5,8,6], glueArrays([1,2,3,3], [3,3,8,6]) має повернути [1,2,3,3,3,8,6], glueArrays([1,2,3,4], [5,2,8,6]) має повернути null. */
console.log('Task 4');
const glueArrays = (arr, arr2) => {
  if (arr.at(-1) === arr2.at(0)) {
    arr.pop();
    for (const el of arr2) {
      arr.push(el);
    }
    return arr;
  }
  return null;
};
const result4 = glueArrays([1, 2, 3, 4], [4, 5, 8, 6]);
console.log(result4);

// Написати функцію яка змінює порядок літер в рядку на зворотній. Використовувати методи reverse, toReversed заборонено.
console.log('Task 5');
function reverseI(arr) {
  const arr2 = [];
  for (const el of arr) {
    arr2.unshift(el);
  }

  return arr2;
}
const result5 = reverseI(['a', 'b', 'c', 'k', 'j']);
console.log(result5);
