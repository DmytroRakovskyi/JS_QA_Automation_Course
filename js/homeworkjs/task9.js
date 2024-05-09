// Написати функцію яка прибирає з масиву дублікати. Для вирішення обовʼязково використати filter.
// filter((element, index, array) => { ... } )
//Task 2
console.log("Task 2");
let arr2 = [1, 2, 3, 3, 3, 4, 5, 7, 66, 33, 22, 11, 1, 1, 2];
const removeDuplicates = (arr) =>
  arr.filter((el, i) => {
    return arr.indexOf(el) === i;
  });
const result2 = removeDuplicates(arr2);
console.log(result2);
// Написати функцію яка отримує масив масивів (матрицю) і повертає масив який включає останні елементи з кожного підмасиву.
//Task 3

console.log("Task 3");
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const lastEl = (arr) => arr.map((lastN) => lastN.at(-1));
const result3 = lastEl(matrix);
console.log(result3);

// Напишіть функцію яка перемішує (випадковим чином переставляє) елементи масиву.
//Task4
console.log("Task 4");
let arr4 = [1, 2, 3, 4, 5, 6, 0, -22, 22, 1, "a"];
const randomArr = (arr) => arr.sort((a, b) => Math.random() - 0.5);
const result4 = randomArr(arr4);
console.log(result4);

// Напишіть функцію яка міняє порядок літер в рядку на зворотній. Для вирішення обовʼязково використати reduce.
// Task 5
console.log("Task 5");
const letters = ["a", "b", "c", "d"];
const reverseR = (arr) =>
  arr.reduce((acc, currV) => {
    acc.unshift(currV);
    return acc;
  }, []);
const result5 = reverseR(letters);
console.log(result5);

//Написати функцію яка повертає true якщо в масиві є 2 сусідніх елементи (числа) які відрізняються на одиницю. В іншому випадку повертається false. Для вирішення обовʼязково використати методи масивів
//Task 6
console.log("Task 6");
let arr6 = [1, 3, 5, 7, 8, 22];

let learnEvery = (arr) =>
  arr.some((_, i) => arr[i] - arr[i + 1] == 1 || arr[i] - arr[i + 1] == -1);
const result6 = learnEvery(arr6);
console.log(result6);

//Написати функцію яка сортує за спаданням масив рядків по вазі кожного рядка. Вага рядка розраховується наступним чином: для кожного символа вираховується код за допомогою метода charCodeAt() після чого коди складаються. Отримане числове значення і є вагою рядка. Для вирішення обовʼязково використати методи масивів.
// Task 7
console.log("Task 7");
const sortByWeight = (arr) => {
  let iterateElements = (el) => {
    let total = 0;
    for (let i = 0; i < el.length; i++) {
      total += el.charCodeAt(i);
      // Здесь el - это строка, а i - это текущий индекс символа в этой строке....
    }
    return total;
  };
  return arr.sort((a, b) => iterateElements(a) - iterateElements(b));
};
const result7 = sortByWeight(["d", "b", "c"]);
console.log(result7);

// const sortByW = arr =>

//Task 8
// https://www.codewars.com/kata/reviews/51e704f2d8dbace38900027d/groups/6637e405a9c1cb000164b28f

//Task 9
// https://www.codewars.com/kata/reviews/51e704f2d8dbace38900027d/groups/6637e405a9c1cb000164b28f