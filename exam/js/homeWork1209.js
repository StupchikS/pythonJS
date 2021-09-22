//Задача Реализуйте функцию getMax(), которая ищет в массиве максимальное значение и возвращает его.  Для пустого массива возвращается null 
'use strict';
const getMaxOfArray = (array) => {
    
    if (array.length < 1){    // проверка на пустой массив
        return "Arr is empty";
    } 
       
    let [max, ...rest] = array// первое число в массиве считаем максимальным

        for (let  item = 1; item <array.length; item++) { //бежим по массиву и сравниваем с max, если встретили больше, то перезаписываем
            
            if (item > max) {
                max = item;
            }
        }

    return max;

}
console.log(getMaxOfArray([]));
console.log(getMaxOfArray([1, 10, 8]));
console.log(getMaxOfArray([27, 0, -5, 40]));


// задача Реализуйте функцию, которая извлекает из массива элемент по указанному индексу, если индекс существует,
// либо возвращает значение по-умолчанию. Функция принимает на вход три аргумента:
const cities = ['moscow', 'london', 'berlin', 'porto'];  // создаем массив
const getElement = (cities, index, strong) => {
    if (index < 0 || index >= cities.length) {  //проверяем, что индекс в пределах длины массива
        return strong;  // если за пределами, то значение по умолчанию
    }
    
    return cities[index];   
    
    //меня терзают сомнения, что я правильно понял условие задачи, как то все легко
    

}
console.log(getElement(cityes, 3, "Tulun"));
console.log(getElement(cityes, -1, "oops"));
console.log(getElement(cityes, 2, "Any City"));
console.log(getElement(cityes, 5, "Irkutsk"));
console.log(getElement(cityes, 6, "Bratsk"));

//задача функция, которая принимает на вход в виде массива кошелек с деньгами и название валюты и возвращает сумму денег указанной валюты.
//параметры функции: 
// массив, содержащий купюры разных валют с различными номиналами
// наименование валюты
const money1 = ['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',];
const money2 = ['eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',];
const money3 = ['eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200',];
const getTotalMoney =(money, currency) => {
    let sum = 0;
    for (let index = 0; index < money.length; index++){
        if (money[index].slice(0, 3) === currency) {  //берем первые символы и сравниваем с требуемой валютой (точное совпадение) по началу писал elemen[0]+element[1]+element[2], но поэже разобрался со slice
          // sum = sum + +element.slice(4); //берем строку от 4 элемента и до конца строки, переводим плюсом в числовой и складываем в сумму если наша валюта
          
          // СДЕЛАЛ ПЕРЕВОД В ЧИСЛО КАК ВЧЕРА 

          sum = sum + parseInt(money[index].slice(4)); //И ТАК РАБОТАЕТ И С ПЛЮСОМ
        }
    }
    return sum;
 }
console.log(getTotalMoney(money1, 'usd'));
console.log(getTotalMoney(money2, 'eur'));
console.log(getTotalMoney(money3, 'rub'));
console.log(getTotalMoney(money2, 'usd'));
