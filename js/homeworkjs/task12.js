//Task3
//№1. Створити обʼєкти animal, dog, bulldog. Обʼєкт bulldog має мати прототип dog. Обʼєкт dog має мати прототип animal. Кожен обʼєкт має містити унікальні властивості (мінімум 1) і методи (мінімум 1). Продемонструвати виклики всіх методів на обʼєкті bulldog.
//Переробити завдання №1 із ДЗ ДЗ 11. JavaScript - Prototypes & Inheritance із використанням класів.

console.log("Task 3");

class Animal {
  ability = "vision";
  constructor(size, sex) {
    this.size = size;
    this.sex = sex;
  }
  showSize() {
    console.log(this.size);
  }
}

class Dog extends Animal {
  constructor(size, sex, bark) {
    super(size, sex);
    this.bark = bark;
  }
  toBark() {
    console.log(` ${this.bark} Gav Gav`);
  }
}

class Bulldog extends Dog {
  constructor(size, sex, bark, fart, name) {
    super(size, sex, bark);
    this.fart = fart;
    this.name = name;
  }
  toFart() {
    console.log(`Fart sound: ${this.fart}`);
  }
  showName() {
    console.log(`Name: ${this.name}`);
  }
}

// Створення об'єктів
let animal = new Animal("Tremendous", "Male");
let dog = new Dog("Tiny", "Female", "GAAAAV");
let bulldog = new Bulldog("Small", "Male", "GOOOF", "poooo", "Peeter");

bulldog.showSize();
bulldog.toBark();
bulldog.toFart();
bulldog.showName();

console.log(`              
 
 
 `);

//Task 4
//Створити клас User, конструктор якого в якості параметрів приймає ім'я та прізвище користувача. Клас має мати геттер/сеттер fullName який дозволяє в подальшому змінити у об'єкта user ім'я та прізвище. Можливість встановити ім'я та прізвище напряму має бути обмежена, скористайтеся приватними # властивостями.
console.log("Task 4");

class User {
  #firstName;
  #surname;
  constructor(firstName, surname) {
    this.#firstName = firstName;
    this.#surname = surname;
  }
  //https://learn.javascript.ru/property-accessors
  get fullName() {
    return `${this.#firstName} ${this.#surname}`;
  }

  set fullName(value) {
    [this.#firstName, this.#surname] = value.split(" ");
  }
  get firstName() {
    return this.#firstName;
  }

  get surname() {
    return this.#surname;
  }

  set firstName(value) {
    this.#firstName = value;
  }

  set surname(value) {
    this.#surname = value;
  }
}

let user1 = new User("Dmytro", "Rakovskyi");

console.log(user1.fullName);
console.log(user1.firstName);
console.log(user1.surname);

console.log(`              
 
 
 `);

console.log("Task 5");
//Напишіть функцію checkDogBreed(dogObject, Breed) яка приймає в якості параметрів об'єкт собаки і породу (клас). Функція вертає true якщо в нащадках собаки є представники породи. Окрім імплементації необхідно надати приклад використання.

//Напишіть функцію checkDogBreed(dogObject, Breed) яка приймає в якості параметрів об'єкт собаки і породу (клас). Функція вертає true якщо в нащадках собаки є представники породи. Окрім імплементації необхідно надати приклад використання.

class Breed {
  isAnimal = true;
  constructor(furType, agression, bark) {
    this.furType = furType;
    this.agression = agression;
    this.bark = bark;
  }
  toBark() {
    console.log(` ${this.bark}`);
  }
}

const checkDogBreed = (dogObject, Breed) => {
  return dogObject instanceof Breed;
};

class Labrador extends Breed {
  constructor(furType, agression, bark, name) {
    super(furType, agression, bark);
    this.name = name;
  }
}

class Fox {
  agression = "Fury";
  constructor(furType, name) {
    this.name = name;
    this.furType = furType;
  }
}
let dog1 = new Labrador("smooth-haired", "no", "Gov", "Matilda");
let notDog1 = new Fox("Red", "Jammy");
const resultTrue = checkDogBreed(dog1, Labrador);

const resultFalse = checkDogBreed(notDog1, Labrador);
console.log(`Result check 1:  ${resultTrue}, Result check 2: ${resultFalse}`);
