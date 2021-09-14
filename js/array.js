// массивы - упорядоченные наборы(коллекции) элементов (друзья в соцсети, студенты в группе и т.д.).
// задача массива - представить такие коллекции в виде единой структуры, которая позволяет работать с ними как с единым целым.

// определение массива
// const items = [];

// // создание массива с тремя элементами
// const animals = ['cats', 'dogs', 'birds'];

// // // получение данных
// console.log(animals[0]); // 'cats'
// console.log(animals[1]); // 'dogs'

// // // // узнать длину массива
// console.log(animals.length);

// обращение к элементу при помощи переменной
// let i = 1;
// let j = 1;
// const animals = ['cats', 'dogs', 'birds'];
// console.log(animals[i + j]);

// в квадратные скобки можно подставить вызов функции
// const animals = ['cats', 'dogs', 'birds'];
// const getIndexOfSecondElement = () => 1;
// console.log(animals[getIndexOfSecondElement()]); // 'dogs'

// получение последнего элемента в массиве
// const animals = ['cats', 'dogs', 'birds'];
// console.log(animals[animals.length - 1]); // 'birds'

// напишите функцию, которая возвращает массив из двух элементов - названий выходных дней на английском. Функция принимает на вход параметр - формат возраста. Есть два возможных значения:
// 'long' - массив содержит значения saturday и sunday.
// 'short' - массив содержит значения sat и sun.

// Пример вызова
// myFunction('short'); // короткая запись дней
// myFunction('long'); // длинная запись дней

// модификация
// const name = 'Amazon';
// console.log(name.toUpperCase()); // 'AMAZON'. любые ф-ции и методы над ними возвращают новые значения, но ничего не могут делать со старым.
// console.log(name); // 'Amazon'

// изменение массива
//const animals = ['cats', 'dogs', 'birds'];

// // меняется первый элемент массива
// // animals[0] = 'horses';
// // console.log(animals);

// animals = ['fish', 'cats']; // typeerror
// console.log(animals);

// константы хранят ссылку на данные, а не сами данные. это значит, что менять данные можно, но нельзя заменить ссылку.

// добавление элемента в массив
// push() добавляет элемент в конец массива
// const animals = ['cats', 'dogs', 'birds'];
// animals.push('horses');

// массив animals изменен - стал больше
// console.log(animals);
// console.log(animals[3]); // 'horses'


// добавление элемента в начало массива
// unshift() добавляет элемент в начало массива
// const animals = ['cats', 'dogs', 'birds'];
// // animals.unshift('horses');

// // console.log(animals);

// // иногда индекс добавления известен сразу
// animals[3] = 'horses';
// console.log(animals);

// удаление элементов из массива
// const animals = ['cats', 'dogs', 'birds'];
// delete animals[1]; // удаляем элемент под индексом 1. уменьшение размера массива - нежелательная операция. 
// console.log(animals);
// console.log(animals.length);

// реализовать функцию, которая меняет местами первый и последний элемент массива. Если массив содержит меньше двух элементов, то возвращается как есть. 
// Примеры вызова
// myFunction([]); // []
// myFunction([1]); // [1]
// myFunction([1, 2]); // [2, 1]
// myFunction(['one', 'two', 'three']); // ['three', 'two', 'one']

// const reverseArray = items => {
//     let newArray = [];
//     if (items.length < 2) {
//         return items;
//     } else {
//         for(let i = items.length - 1; i >= 0; i--){
//             newArray.push(items[i]);
//         }
//         return newArray;
//     }
// }

// console.log(reverseArray([1,2,3]));

// решение 2
// const reverseArray = items => {
//     if (items.length < 2) {
//         return items;
//     }
//     const lastIndex = items.length - 1;
//     const last = items[lastIndex];
//     items[lastIndex] = items[0];
//     items[0] = last;

//     return items;
// };

// console.log(reverseArray(['one','two','three']));

// проверка существования значения в массиве (выход за границу массива)
// const animals = ['cats', 'dogs', 'birds'];

// console.log(animals[5]); // undefined
// console.log(animals[4]); // undefined
// console.log(animals[3]); // undefined
// console.log(animals[2]); // 'birds'

// // способ проверить выход за границу - убедиться в том, что индекс не превышает длину массива
// if(index < items.length) {
//     items[index]; // все ок
// }

// цикл for в массиве.
// 1. вывод значений в обратной порядке. идем в обратном порядке от нулевого индекса до последнего. 
// const animals = ['cats', 'dogs', 'birds'];
// const animals = ['cats', 'dogs', 'birds'];
// for(let i = 0; i < animals.length; i++) {
//     const index = (animals.length - 1) - i;
//     console.log(animals[index]);
// }

// 2. обход в обратном порядке, от верхней границы до нижней. т.е. от последнего индекса к первому(к нулю).
// const animals = ['cats', 'dogs', 'birds'];

// for(let i = animals.length - 1; i >= 0; i--) {
//     console.log(animals[i]);
// }

// модификация(изменение) массива. Задача: нормализация списка электронных адресов - приведение к нижнему регистру
// const emails = ['VASYA@gmAil.com', 'iGoR@yandex.RU', 'netiD@hot.CoM'];
// console.log(emails);

// for(let i = 0; i <emails.length; i++) {
//     const email = emails[i];
//     const normalizedEmail = email.toLowerCase(); // преобразование строки в нижний регистр
//     emails[i] = normalizedEmail; // заменяем значение
// }
// console.log(emails);


// Задача. написать функцию, которая принимает на вход массив и строковый префикс, и возвращает новый массив, в котором к каждому элементу исходного массива добавляется переданный префикс. 




// console.log(newNames); // ['Mr john', 'Mr smith', 'Mr kalr'];
// console.log(names); // ['john', 'smith', 'karl']
// const names = ['john', 'smith', 'karl'];
// const addPrefix = (items, prefix) => {
//     const result = [];

//     for(let i = 0; i < items.length; i++) {
//         result[i] = `${prefix} ${items[i]}`;
//     }
//     return result;
// };

// const newNames = addPrefix(names, 'Mr');

// console.log(newNames);

// Ссылки

// const items = [1, 2];

// // // ссылаются на один и тот же массив
// const items2 = items;
// items2.push(3);

// console.log(items); // [ 1, 2, 3 ]
// console.log(items2); // [ 1, 2, 3 ]

// console.log(items === items2);

// более того, если передать массив в какую-то функцию, которая его изменяет, то массив тоже изменится

// const f = (coll) => coll.push('wow');

// const items = ['one'];
// f(items);
// console.log(items);

// f(items);
// console.log(items);


// агрегация - любые вычисления, которая строятся на основе всего набора данных, например, поиск max, min, среднего.

// функция поиска максимального значения
// const calculateMax = (coll) => {
//     if (coll.length === 0) {
//         return null;
//     }

//     let max = coll[0]; // принимаем за максимальное первый элемент
//     for(let i = 1; i < coll.length; i++) {
//         const currentElement = coll[i];
//         if(currentElement > max) {
//             max = currentElement;
//         }
//     }
//     return max;
// };

// console.log(calculateMax([])); // null
// console.log(calculateMax([3, 2, -10, 38, 0, -2, -4, 40, 52])); // 52

// найти сумму элементов в массиве
// const calculateSum = coll => {
//     let sum; // начальное значение суммы
//     for(let i = 0; i < coll.length; i++) {
//         sum += coll[i]; // поочередно складываем все элементы
//     }
//     return sum;
// };

// console.log(calculateSum([])); // 0
// console.log(calculateSum([3, 2, -10, 38, 0])); // 33

//процесс вычислений
// let sum = 0;
// sum = sum + 3; // 3
// sum = sum + 2; // 5
// sum = sum +-10; // -5
// sum = sum + 38; // 33
// sum = sum + 0; // 33

// Задача. написать функциюю, которая высчитывает сумму всех элементов массива, которые делятся без остатка на 3.
// const coll = []; // 0
// const coll = [8, 9, 21, 19, 18, 22, 7];
// Пример: calculateSum(coll); // 48

// for
// const userNames = ['petya', 'vasya', 'evgeny'];
// for(let i = 0; i < userNames.length; i++) {
//     console.log(userNames[i]);
// }

// for...of. данный цикл знает о том, как перебирать элементы и знает о том, когда они закончатся
// const userNames = ['petya', 'vasya', 'evgeny'];
// for(const name of userNames) {
//     console.log(name);
// }

// данный цикл отлично подходит для задач агрегации
// const calculateSum = coll => {
//     let sum = 0;
//     for(const value of coll) {
//         sum += value;
//     }
//     return sum;
// };
// console.log(calculateSum([])); // 0
// console.log(calculateSum([3, 2, -10, 38, 0])); // 33

// цикла for...of будет недостаточно, когда потребуется ручное управление обходом. например, когда нужно идти не по каждому элементу массива, а через один. 
// for (let i = 0; i <items.length; i+= 2) {
//     // какой-то код
// }

// // иногда нужно обходить массив в обратном порядке. for...of здесь бессилен
// for(let i = items.length - 1; i >= 0; i -= 1 ) {
//     // какой-то код
// }

// // ситуация, когда нужно перебирать числа в определенном диапазоне. 
// for(let i = 5; i < 10; i++) {
//     // какой-то код
// }

// // бывают ситуации, когда во время обхода необходимо менять исходный массив
// for(let i = 0; i <items.length; i += 1) {
//     // items[i] = // что-то делаем
// }

// const greeting = "Hello";

// for(const symbol of greeting) {
//     console.log(symbol);
// }

// напишите функцию, которая высчитывает среднее арифметическое элементов переданного массива.
// пример: const temperatures = [37.5, 34, 39.3, 40, 38.7, 41.5];
// calculateAverage(temperatures); // 38.5
// const tempreatures2 = [];
// calculateAverage(temperatures2); // null

// удаление элементов из массива
// const animals = ['cats', 'dogs', 'birds'];
// delete animals[1]; // удаляем элемент под индексом 1. уменьшение размера массива - нежелательная операция. 
// console.log(animals);
// console.log(animals.length);

// задача. удаление null элементов из массива
// const compact = coll => {
//     // создание результирующего массива, который наполняется только подходящими под условие значениями. 
//     // именно так нужно воспринимать фразу удалить из массива что-то. 
//     const result = [];
//     for(const item of coll) {
//         if(item !== null) {
//             result.push(item);
//         }
//     }
//     return result;
// };

// console.log(compact([0, 1, false, null, true, 'wow', null])); // [0, 1, false, true, 'wow']
// console.log(compact([])); // []


// управляющие инструкции (break и continue)
// break - производит выход из цикла. 
// const coll = ['one', 'two', 'three', 'four', 'stop', 'five'];
// for(const item of coll) {
//     if(item === 'stop') {
//         break;
//     }
//     console.log(item);
// }

// continue - позволяет пропустить итерацию цикла.
// const coll = ['one', 'two', null, 'four', null, 'five'];
// const myCompact = coll => {
//     const result = [];
//     for(const item of coll) {
//         if(item !== null) {
//             continue;
//         }
//         result.push(item);
//     }
//     return result;
// };

// console.log(myCompact(coll));


// сортировка массивов.

// const numbers = [8, 3, 10];

// numbers.sort((a, b) => a - b); // сортировка по возрастанию
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// пузырьковая сортировка
// const bubbleSort = coll => {
//     let stepsCount = coll.length - 1;
//     let swapped; // показывает был ли совершен обмен элементов во время перебора массива
//     // do...while. разница в проверке. здесь она делается не до выполнения тела, а после
//     do {
//         swapped = false;
//         for(let i = 0; i <stepsCount; i++) {
//             if(coll[i] > coll[i + 1]) {
//                 const temp = coll[i]; // константа для хранения текущего элемента
//                 coll[i] = coll[i + 1];
//                 coll[i + 1] = temp;

//                 swapped = true;
//             }
//         }
//         stepsCount -= 1;
//     } while (swapped); // продолжаем, пока swapped === true
//     return coll;
// };
// console.log(bubbleSort([3, 2, 10, -2, 0, -4, -8, 22, 34, 7]);

// Стек - упорядоченная коллекция элементов, в которой добавление новых и удаление старых элементов всегда происходит с одного конца коллекции. Обычно его называют вершиной стека. 
// структура данных - это конкретный способ хранения и организации данных.
// другие структуры данных: списки, хеш-таблицы, деревья, графы, стек, очередь.

// Работа со стеком включает в себя следующие операции:
// - добавить в стек (push)
// - взять из стека (pop)
// - вернуть элемент с вершины стека без удаления (peekBack)
// - проверить на пустоту(isEmpty)
// - вернуть размер (size)

// const stack = [];

// stack.push(3);
// console.log(stack); // [3]
// stack.push('Winterfall');
// console.log(stack);
// stack.push(true);
// console.log(stack);

// const element1 = stack.pop();
// console.log(element1);
// const element2 = stack.pop();
// console.log(element2);
// console.log(stack);

// функцию, которая проверяет, что парные скобки сбалансированы. т.е. каждая открывающая скобка имеет закрывающую. (), (()), ((())).
// пример несбалансированных скобок: (, ((), )(.

// - если перед нами открывающий элемент, то заносим его в стек
// - если закрывающий, то достаем из стека элемент (очевидно, последний добавленный) и смотрим, что он открывающий для данного закрывающего. если проверка провалилась, значит выражение не соотв. требуемому формату. 
// - если мы дошли до конца строки и стек пустой, то все хорошо. если в стеке остались элементы, то проверка не прошла.

// const checkIfBalanced = (expression) => {
//     const stack = [];
  
//     for (const symbol of expression) {
//       if (symbol === '(') {
//         stack.push(symbol);
//       } else if (symbol === ')') {
//         // вызов метода pop на пустом массиве возвращает undefined
//         if (!stack.pop()) {
//           return false;
//         }
//       }
//     }
  
//     return stack.length === 0;
//   };
  
//   console.log(checkIfBalanced('('));
//   console.log(checkIfBalanced(')('));
//   console.log(checkIfBalanced('()()'));
//   console.log(checkIfBalanced('((()))'));
//   console.log(checkIfBalanced('((())())'));


// деструктуризация - синтаксическая возможность раскладывать элементы массива (и не только) в отдельные константы и переменные.
// const points = [3, 5];

// console.log(`${points[0]}:${points[1]}`);

// const points = [3, 5];
// const x = points[0];
// const y = points[1];
// console.log(`${x}:${y}`);

// const points = [3, 5];
// // слева массив повторяет структуру правого массива, но вместо значений используются идентификаторы
// // [x, y] = [3, 5], где x = 3, y = 5
// const [x, y] = points;
// console.log(`${x}:${y}`);

// const points = [3, 5];

// // извлекаем первый элемент
// const [x] = points;
// console.log(x);

// // извлекаем второй элемент
// // для этого просто не указываем первый
// const [, y] = points;
// console.log(y);

// // и даже так
// const [, secondElement, , fourthElement, fifthElement] = [1, 2, 3, 4, 5, 6];

// console.log(secondElement); // 2
// console.log(fourthElement); // 4
// console.log(fifthElement); // 5

// const [firstElement, secondElement, thirdElement = 3] = [1, 2];
// console.log(firstElement);
// console.log(secondElement);
// console.log(thirdElement);

// деструктуризация в циклах
// const points = [
//     [4, 3],
//     [0, -3],
// ];

// for(const [x, y] of points) {
//     console.log([x, y]);
// }

// деструктуризация строк
// const [first, second, third] = 'two';
// console.log(first);
// console.log(second);
// console.log(third);

// rest оператор и деструктуризация
// rest оператор позволяет свернуть часть элементов во время деструктуризации. 

// const fruits = ['apple', 'orange', 'banana', 'pineapple'];

// const [first, ...rest] = fruits;
// console.log(first);
// console.log(rest);

// const [first, second, ...rest] = fruits;
// console.log(rest);

// в ситуациях, когда нас интересует только часть массива, но не важны первые элементы, лучше воспользоваться методом массива slice()
// метод slice возвращает нвоый массив, а не изменяет старый
// const fruits = ['apple', 'orange', 'banana', 'pineapple'];
// const rest = fruits.slice(1);
// console.log(rest);
// console.log(fruits);

// const [first, second, ...rest] = 'some string';
// console.log(first);
// console.log(second);
// console.log(rest);

// const [...rest] = [1, 2, 3];
// console.log(rest);

// spread оператор и создание новых массивов
// spread оператор растягивает элементы

// Задача. нужно определить массив, добавив туда элементы из другого массива.
// const russianCities = ['moscow', 'kazan'];
// const cities = [...russianCities, 'milan', 'rome'];
// console.log(cities);

// копирование массива
// const russianCities = ['moscow', 'kazan'];
// const copy = [...russianCities];
// copy.push('samara');
// console.log(russianCities);
// console.log(copy);

// то же самое без spread-оператора
// const russianCities = ['moscow', 'kazan'];
// const copy = russianCities.slice();
// copy.push('samara');

// console.log(russianCities);
// console.log(copy);


// функцию, которая принимает на вход в виде массива кошелек с деньгами и название валюты и возвращает сумму денег указанной валюты.
// параметры функции: 
// * массив, содержащий купюры разных валют с различными номиналами
// * наименование валюты

// const money1 = ['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',];
// getTotalAmount(money1, 'usd') // 16
// const money2 = ['eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',];
// getTotalAmount(money2, 'eur') // 135
// const money3 = ['eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200',];
// getTotalAmount(money3, 'rub') // 270

// getTotalAmount(money1, 'usd') // 270
