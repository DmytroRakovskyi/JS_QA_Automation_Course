//Створити проміс, який випадковим чином або завершується успішно (повертає рядок"Random Success'), або з помилкою ('Random Error'). Час виконання проміса має складати від 1 до 5 секунд (для кожного запуску скрипта час виконання також обирається випадково).'
//Task 2


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let promise = new Promise(function (resolve, reject) {
  setTimeout(
    () =>
      Math.random() < 0.5
        ? resolve("Random Success")
        : reject(new Error("Random Error")),
    getRandomInt(1000, 5000)
  );
});

promise
  .then((result) => {
    console.log("Result:", result);
  })
  .catch((error) => {
    console.log("Error resason:", error);
  });

//Створити функцію getTodos(arr). Функція приймає масив з ID нотаток у діапазоні 1 - 200, наприклад [1, 3, 50, 4] і повертає масив нотаток. Нотатки беріть з https://jsonplaceholder.typicode.com/. Функція має повертати або ВСІ нотатки, або помилку. Для цього завдання використовувати async/await заборонено. Використання endpoint для отримання всіх нотаток одним запитом заборонено (вважайте що його не існує). Вам може знадобитися Promise.all.
//Task 3
function getTodos(ids) {
  const resourceUrl = "https://jsonplaceholder.typicode.com/todos/";

  for (const id of ids) {
    if (id < 1 || id > 200) {
      return Promise.reject(
        new Error(`ID ${id} is out of range. IDs must be between 1 and 200.`)
      );
    }
  }

  const promiseAll = ids.map((id) =>
    fetch(resourceUrl + id).then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch todo with ID: ${id}`);
      }
      return response.json();
    })
  );

  return Promise.all(promiseAll)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
}

const ids = [1, 2, 3, 4];
getTodos(ids)
  .then((todos) => {
    console.log("Todos:", todos);
  })
  .catch((error) => {
    console.error("Failed to fetch todos:", error);
  });

// Створити нову версію getTodos(arr). Вона так само має повертати масив нотаток, але якщо якісь нотатки недоступні ми маємо повертати null замість об'єкту недоступної нотатки в масиві. Якщо недоступні ВСІ нотатки - повертаємо просто null. Для цього завдання використання async/await обов'язкове. Використання endpoint для отримання всіх нотаток одним запитом заборонено (вважайте що його не існує). Вам може знадобитися Promise.allSettled.
//Task 4

async function newGetTodos(ids) {
  const resourceUrl = "https://jsonplaceholder.typicode.com/todos/";

  const promises = ids.map((id) => fetch(resourceUrl + id));

  try {
    const responses = await Promise.allSettled(promises);

    const dataPromises = responses.map((result) => {
      if (result.status !== "fulfilled" || !result.value.ok) {
        return null;
      }
      return result.value.json();
    });

    const data = await Promise.all(dataPromises);

    if (data.every((todo) => todo === null)) {
      return null;
    }

    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

const idsNew = [1, 2, 3, 4];
newGetTodos(idsNew)
  .then((todos) => {
    console.log("Todos:", todos);
  })
  .catch((error) => {
    console.error("Failed to fetch todos:", error);
  });

//Створити асинхронну функцію delay(s), яка в якості аргументу приймає тривалість паузи (в секундах). Для вирішення задачі вам знадобляться проміс і setTimeout.
//Task 5
let delays = (pause) => {
  return new Promise((resolve) => setTimeout(resolve, pause * 1000)); // тут нужно включать голову и помнить что setTimeout работает с милисекундами
};

delays(2).then(() => console.log("pause finished :)"));
