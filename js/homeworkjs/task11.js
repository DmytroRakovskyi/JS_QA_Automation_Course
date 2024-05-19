//№1. Створити обʼєкти animal, dog, bulldog. Обʼєкт bulldog має мати прототип dog. Обʼєкт dog має мати прототип animal. Кожен обʼєкт має містити унікальні властивості (мінімум 1) і методи (мінімум 1). Продемонструвати виклики всіх методів на обʼєкті bulldog.
console.log("Task 1");

let animal = {
  isMammal: true,
  showSleep() {
    console.log("ZzzzzZZzzzz");
  },
};

let dog = {
  hasFur: true,
  toBark() {
    console.log("Gav Gav");
  },
};
Object.setPrototypeOf(dog, animal);

let bulldog = {
  name: "",
  loveability: "high",
  askForFood() {
    console.log("Shponk shpong, Gav, Gav");
  },
};
Object.setPrototypeOf(bulldog, dog);

bulldog.showSleep();
bulldog.toBark();
bulldog.askForFood();

console.log(`


`);
//№2. Створити функцію-конструктор Train(dog). Функція приймає обʼєкт собаки який включає властивості name, character (характер собаки). Функція повертає обʼєкт собаки зі зміненим характером, а також вивченими командами (доданими методами). Дана функція має повертати саме змінений вхідний обʼєкт, не новий.

console.log("Task 2");

function Train(dog) {
  dog.name = "Alice";
  dog.character = "Agresive Dog";
  dog.askForFood = function () {
    console.log("Shponk shpong, Gav, Gav");
  };
  return dog;
}

let newDog = {
  name: "DogName",
  character: "Nasty Dog",
};

Train(newDog);
console.log(newDog.name);
console.log(newDog.character);
newDog.askForFood();

console.log(`


`);

//Створити функцію makePuppy(mother, father). Функція приймає два обʼєкти батьків і повертає новий обʼєкт (щеня) який має всі властивості батьків + імʼя створене з імен батька і матері (алгоритм формування імені лишаю на ваш вибір). Для вирішення задачі обовʼязково використати destructuring assignment.
console.log("Task 3");

function makePuppy(mother, father) {
  let { name: motherName, sex: motherSex, ability: motherAbility } = mother;
  let { name: fatherName, sex: fatherSex, ability: fatherAbility } = father;

  function getPuppyName(parentName, parentSex) {
    const suffix = parentSex === "male" ? "lo" : "la";
    return parentName + suffix;
  }

  const puppyName =
    Math.random() < 0.5
      ? getPuppyName(motherName, fatherSex)
      : getPuppyName(fatherName, motherSex);

  function getRandomSex() {
    return Math.random() < 0.5 ? motherSex : fatherSex;
  }

  const puppy = {
    name: puppyName,
    sex: getRandomSex(),
    ability: `${motherAbility}, ${fatherAbility}`,
  };

  return puppy;
}

let mother = {
  name: "July",
  sex: "female",
  ability: "Laugh",
};
let father = {
  name: "Tato",
  sex: "male",
  ability: "Сry",
};

let puppy = makePuppy(mother, father);
console.log(puppy);
