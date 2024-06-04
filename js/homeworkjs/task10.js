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

// const getTopSalary = (people) => {
  

// // Теперь можно деструктурировать этот массив массивов
// let [name, value] = people5;
// let people_5 = { "Іван": 100, "Петро": 300, "Марія": 250 };
//     return value
//   };




// console.log(getTopSalary(people_5)); // Петро