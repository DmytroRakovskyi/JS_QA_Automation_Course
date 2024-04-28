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
const res1 = getUniqueElements([2,1,1,2,2,2,7, 5, 4, 2, 7,77,27]);
console.log(res1);

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

const sum1 = sum([1, 1, 4, 3,993]);
console.log(sum1);

// Task 3
/*  Створити функцію partialReverse яка отримує масив і повертає масив у якому всі елементи крім першого і останнього мають зворотній порядок. */
console.log('Task 3');

const partialReverse = (arr) => {
  const newArr = arr.slice();
  newArr.shift();
  newArr.pop();
  newArr.reverse();
  newArr.unshift(arr.at(0));
  newArr.push(arr.at(-1));
  return newArr;
};
const result = partialReverse(['first', 'second', 'third', 'four', 'five', 'six']);
console.log(result);

// Task 4
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

// Task 5
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

// Task 6
/*Написати функцію яка повертає true якщо всі елементи масива не мають дублікатів. У іншому випадку функція має повертати false. Використання Set заборонено. */
console.log('Task 6'); 


const isDuplicate = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        return false; 
      }
    }
  }
  return true;
}


const resUlt = isDuplicate([1,2,3,4,5,6]);
console.log(resUlt);

// Task 7
/* Написати функцію removeNegative яка прибирає з масиву чисел негативні елементи. Наприклад removeNegative([-2,4,3,-10,0,3]) має повернути [4,3,0,3]. Використання filter заборонено. */
console.log('Task 7'); 

const removeNegative = (arr) => {
let arrNew = [];
for (let el of arr) {
  if (el>=0)
  arrNew.push(el)
}

return arrNew;
}
const resUlt1 = removeNegative([-1,4,3,0,3,-9999,2]);
console.log(resUlt1);

// Task 8
// Codewars solution https://www.codewars.com/kata/reviews/5679c8ba5da43f03ad0000a5/groups/662e776a57e10e00018c7181