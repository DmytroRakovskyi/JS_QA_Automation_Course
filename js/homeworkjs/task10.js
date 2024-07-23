//#1. Напишіть функцію sortByAge(users), яка приймає масив обʼєктів з властивістю age і сортує їх по ньому.
console.log("Task 1");
let ivan = { name: "Іван", age: 25 };
let petro = { name: "Петро", age: 30 };
let mariya = { name: "Марія", age: 28 };

let arr = [petro, ivan, mariya];

const sortByAge = (users) => users.sort((a, b) => (a.age > b.age ? 1 : -1));
const result1 = sortByAge(arr);
console.log(result1);

sortByAge(arr);

// [{ name: "Іван", age: 25 }, { name: "Марія", age: 28 }, { name: "Петро", age: 30 }]
// Заметки на полях: если возраст объекта a больше возраста объекта b, то возвращается 1. Это означает, что объект a должен быть помещен после объекта b в отсортированном массиве.
// Если возраст объекта a меньше или равен возрасту объекта b, возвращается -1. Это означает, что объект a должен быть помещен перед объектом b в отсортированном массиве.

console.log("Task 1 second way");

const sortByAge_1 = (users) => {
  users.sort((a, b) => a.age - b.age);

  return users;
};
const result1_2 = sortByAge_1(arr);
console.log(result1);

sortByAge_1(arr);

//#2. Створіть функцію groupById(arr), яка створює з масиву об’єкт із ключом id та елементами масиву як значеннями.
console.log("Task 2");

let users = [
  { id: "іван", name: "Іван Іванко", age: 20 },
  { id: "ганна", name: "Ганна Іванко", age: 24 },
  { id: "петро", name: "Петро Петренко", age: 31 },
];

const groupById = (arr) =>
  arr.reduce((acc, users) => {
    acc[users.id] = users;
    return acc;
  }, {});

let usersById = groupById(users);
console.log(usersById);
/*
  usersById = {
    іван: {id: 'іван', name: "Іван Іванко", age: 20},
    ганна: {id: 'ганна', name: "Ганна Іванко", age: 24},
    петро: {id: 'петро', name: "Петро Петренко", age: 31},
  }
  */

//#3. Напишіть функцію groupByCity(users), яка приймає масив обʼєктів і повертає обʼєкт з людьми згрупованими по містам.
console.log("Task 3");

const people = [
  { name: "Oleksii", city: "Kyiv" },
  { name: "Simona", city: "Lviv" },
  { name: "Bartek", city: "Warsaw" },
  { name: "Vasa", city: "" },
  { name: "Nastia", city: "Kyiv" },
];

const groupByCity = (people) => {
  const groupedByCity = {};

  for (let person of people) {
    if (person.city === "") {
      person.city = "notFound";
    }

    let { name, city } = person;

    groupedByCity[city] = groupedByCity[city] || [];
    groupedByCity[city].push(name);
  }

  return groupedByCity;
};

let result3 = groupByCity(users);
console.log(groupByCity(people));

console.log("Task 4");
//#4. Написати функцію doublePrices(obj) яка збільшує вдвічі всі ціни в обʼєкті.

let obj = { banana: 1, orange: 2, meat: 4 };
let doublePrices = (obj) => {
  for (let key in obj) {
    obj[key] *= 2
  }
  return obj;
};
let result = doublePrices(obj);

console.log(result); // 4

console.log("Task 5");
// #5. Написати функцію getTopSalary(people) яка повертає ім’я найбільш високооплачуваної особи.

function getTopSalary(people) {

  let entries = Object.entries(people);
  
  if (entries.length === 0) return null;
  

  let topSalaryEntry = entries.reduce((maxEntry, currentEntry) => {
      return currentEntry[1] > maxEntry[1] ? currentEntry : maxEntry;
  });

 
  return topSalaryEntry[0];
}

let people5 = { "Іван": 100, "Петро": 3000, "Марія": 25000 };
console.log(getTopSalary(people5)); 



console.log("Task 6");

//#6. Написати функцію countDuplicates яка рахує кількість повторень кожного елемента масива.

function countDuplicates(arr) {
  return arr.reduce((counts, num) => {
      counts[num] = (counts[num] || 0) + 1;
      return counts;
  }, {});
}

let arr6 = [2, 2, 2, 2, 3, 3, 7, 4, 4];
console.log(countDuplicates(arr6));
// { '2': 4, '3': 2, '4': 2, '7': 1 }


console.log("Task 9");

// Написати функцію extend(arr) яка повертає новий об’єкт, що містить усі властивості будь-яких об’єктів, переданих у масиві. Повернений об’єкт має включати перший екземпляр кожної властивості. Якщо елемент масиву не є обʼєктом його слід ігнорувати.



function extend(arr) {
  let result = {}; 

  arr.forEach(item => {
      if (typeof item === 'object' && item !== null) { 
          for (let key in item) {
              if (!(key in result)) { 
                  result[key] = item[key];
              }
          }
      }
  });

  return result;
}

let arr9 = [
  { a: 1, b: 2 },
  { b: 3, c: 4 },
  { d: 5 },
  'not an object',
  { e: 6, a: 7 }
];

console.log(extend(arr9));
// { a: 1, b: 2, c: 4, d: 5, e: 6 }

//
console.log('Task 10')
//Ялинка повертається. Створити функцію makeTree(h) яка повертає обʼєкт з властивістю tree і методом showTree()

function makeTree(h) {

  function createRows(level, maxLevel, rows) {
      if (level > maxLevel) return rows;

      let spaces = ' '.repeat(maxLevel - level);
      let stars = '*'.repeat(2 * level + 1);
      rows.push(spaces + stars + spaces);

      return createRows(level + 1, maxLevel, rows);
  }

 
  let tree = createRows(0, h - 1, []);


  // Вернули обьект с три и методом
  return {
      tree: tree,
      showTree: function() {
          this.tree.forEach(row => console.log(row));
      }
  };
}

let treeObj = makeTree(5);
treeObj.showTree();

