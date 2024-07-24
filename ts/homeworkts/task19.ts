// #1. Напишіть функцію sortByAge(users), яка приймає масив обʼєктів з властивістю age і сортує їх по ньому.
console.log("Task 1");

interface User {
    name: string;
    age: number;
}

let ivan: User = { name: "Іван", age: 25 };
let petro: User = { name: "Петро", age: 30 };
let mariya: User = { name: "Марія", age: 28 };

let arr: User[] = [petro, ivan, mariya];

const sortByAge = (users: User[]): User[] => users.sort((a, b) => a.age - b.age);
const result1 = sortByAge(arr);
console.log(result1);

console.log("Task 1 second way");

const sortByAge_1 = (users: User[]): User[] => {
    users.sort((a, b) => a.age - b.age);
    return users;
};
const result1_2 = sortByAge_1(arr);
console.log(result1_2);

// #2. Створіть функцію groupById(arr), яка створює з масиву об’єкт із ключом id та елементами масиву як значеннями.
console.log("Task 2");

interface UserWithId {
    id: string;
    name: string;
    age: number;
}

let users: UserWithId[] = [
    { id: "іван", name: "Іван Іванко", age: 20 },
    { id: "ганна", name: "Ганна Іванко", age: 24 },
    { id: "петро", name: "Петро Петренко", age: 31 },
];

const groupById = (arr: UserWithId[]): { [key: string]: UserWithId } =>
    arr.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {});

let usersById = groupById(users);
console.log(usersById);

// #3. Напишіть функцію groupByCity(users), яка приймає масив обʼєктів і повертає обʼєкт з людьми згрупованими по містам.
console.log("Task 3");

interface Person {
    name: string;
    city: string;
}

const people: Person[] = [
    { name: "Oleksii", city: "Kyiv" },
    { name: "Simona", city: "Lviv" },
    { name: "Bartek", city: "Warsaw" },
    { name: "Vasa", city: "" },
    { name: "Nastia", city: "Kyiv" },
];

const groupByCity = (people: Person[]): { [key: string]: string[] } => {
    const groupedByCity: { [key: string]: string[] } = {};

    for (let person of people) {
        if (person.city === "") {
            person.city = "notFound";
        }

        let { name, city } = person;

        if (!groupedByCity[city]) {
            groupedByCity[city] = [];
        }
        groupedByCity[city].push(name);
    }

    return groupedByCity;
};

console.log(groupByCity(people));

// #4. Написати функцію doublePrices(obj) яка збільшує вдвічі всі ціни в обʼєкті.
console.log("Task 4");

interface Prices {
    [key: string]: number;
}

let obj: Prices = { banana: 1, orange: 2, meat: 4 };
let doublePrices = (obj: Prices): Prices => {
    for (let key in obj) {
        obj[key] *= 2;
    }
    return obj;
};
let result = doublePrices(obj);

console.log(result); // { banana: 2, orange: 4, meat: 8 }

// #5. Написати функцію getTopSalary(people) яка повертає ім’я найбільш високооплачуваної особи.
console.log("Task 5");

interface Salaries {
    [key: string]: number;
}

function getTopSalary(people: Salaries): string | null {
    let entries = Object.entries(people);

    if (entries.length === 0) return null;

    let topSalaryEntry = entries.reduce((maxEntry, currentEntry) => {
        return currentEntry[1] > maxEntry[1] ? currentEntry : maxEntry;
    });

    return topSalaryEntry[0];
}

let people5: Salaries = { "Іван": 100, "Петро": 3000, "Марія": 25000 };
console.log(getTopSalary(people5));

// #6. Написати функцію countDuplicates яка рахує кількість повторень кожного елемента масива.
console.log("Task 6");

function countDuplicates(arr: number[]): { [key: number]: number } {
    return arr.reduce((counts, num) => {
        counts[num] = (counts[num] || 0) + 1;
        return counts;
    }, {});
}

let arr6: number[] = [2, 2, 2, 2, 3, 3, 7, 4, 4];
console.log(countDuplicates(arr6));

// #9. Написати функцію extend(arr) яка повертає новий об’єкт, що містить усі властивості будь-яких об’єктів, переданих у масиві. Повернений об’єкт має включати перший екземпляр кожної властивості. Якщо елемент масиву не є обʼєктом його слід ігнорувати.
console.log("Task 9");

function extend(arr: any[]): { [key: string]: any } {
    let result: { [key: string]: any } = {};

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

let arr9: any[] = [
    { a: 1, b: 2 },
    { b: 3, c: 4 },
    { d: 5 },
    'not an object',
    { e: 6, a: 7 }
];

console.log(extend(arr9));

// #10. Ялинка повертається. Створити функцію makeTree(h) яка повертає обʼєкт з властивістю tree і методом showTree().
console.log("Task 10");

interface TreeObject {
    tree: string[];
    showTree: () => void;
}

function makeTree(h: number): TreeObject {
    function createRows(level: number, maxLevel: number, rows: string[]): string[] {
        if (level > maxLevel) return rows;

        let spaces = ' '.repeat(maxLevel - level);
        let stars = '*'.repeat(2 * level + 1);
        rows.push(spaces + stars + spaces);

        return createRows(level + 1, maxLevel, rows);
    }

    let tree = createRows(0, h - 1, []);

    return {
        tree: tree,
        showTree: function() {
            this.tree.forEach(row => console.log(row));
        }
    };
}

let treeObj = makeTree(5);
treeObj.showTree();
