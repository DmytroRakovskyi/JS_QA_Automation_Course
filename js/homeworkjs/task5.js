// Написати аналогічний скрипт, але у node.js середовищі. Значення a, b, c вводяться користувачем в консолі за допомогою пакета readline-sync. Результат вивести також в консоль. Завдання бажано зробити в Node.js playground.

function Quadratic() {
  const readlineSync = require('readline-sync');
  console.log(` 
    
    Welcome to Quadratic equation solver
    ------------------------------------------------------------------------------
    A quadratic equation is an algebraic equation of the second degree in x. The quadratic equation in its standard form is ax2 + bx + c = 0, where a and b are the coefficients, x is the variable, and c is the constant term.
  
    Solution will be made over Discriminant
    ------------------------------------------------------------------------------
    Enjoy!  
    `);

  let a; let b; let
    c;
  a = readlineSync.questionFloat('Please enter value for a: ', {
    limit: Number,
    limitMessage: 'Input valid number, please.',
  });
  console.log(`You have entered the next number: ${a}`);
  while (a === 0) {
    console.log('Input valid number, please, a cannot be 0 due to math rules');
    a = readlineSync.questionFloat('Please enter value for a: ', {
      limit: Number,
      limitMessage: 'Input valid number, please.',
    });
  }
  b = readlineSync.questionFloat('Please enter value for b: ', {
    limit: Number,
    limitMessage: 'Input valid number, please.',
  });
  console.log(`You have entered the next number: ${b}`);
  c = readlineSync.questionFloat('Please enter value for c: ', {
    limit: Number,
    limitMessage: 'Input valid number, please.',
  });
  console.log(`You have entered the next number: ${c}`);

  const d = parseFloat(b ** 2 - 4 * a * c);
  const x1 = parseFloat((-b + Math.sqrt(d)) / (2 * a));
  const x2 = parseFloat((-b - Math.sqrt(d)) / (2 * a));

  if (d < 0) {
    return console.log('There are no possible squares'); // to test a = 3 , b = -4 , c = 2
  } if (d === 0) {
    console.log(`Since d = 0, only one square root  x1 = ${x1}`); // a = 1, b = -6 , c = 9
  } else {
    console.log(`Roots of the quadratic equation,
      
      x1 = ${x1} ; x2 = ${x2}
      `); // a = 1 , b = -4 , c = -5
  }
}

Quadratic();
