

// задача 1 сделать первые буквы слов в строке заглавными
const lettersUpper = str => {
    let result = ""; //str[0].toUpperCase();   первую делал заглавной, думал ошибка в -1 индексе, но не.
    for(let i = 0; i < str.length; i++ ) {
        if (i === 0 || str[i - 1] === ' '){
        result = result + str[i].toUpperCase();  // На уроке неправильно написали вы писали так toUpperCase(str[i]) и выдает ошибку, так переводит нет подсказал
         } else  
               result = result + str[i];
    }
    return result;
};
console.log(lettersUpper("hello world! bla bla"));

//задача 2 зеркальный переворот числа
const reversNumber = number =>{
    let isNegative = false;
    if (number < 0) {
        number = number * (-1);   // убираем минус, в перевернутом числе стоит в конце  и запоминаем этот факт
        isNegative = true;
    }
    const strNumder = String(number);   //перевод числа в строку
    let revStrNumber = '';
    
    for (let l = (strNumder.length -1); l >= 0; l--) {  
        revStrNumber = revStrNumber + strNumder[l];
    }
    
    if (isNegative) {
        revStrNumber = "-" + revStrNumber;   // проверка на отрицательность и добавляем минус
    } 

    return revStrNumber;
}

console.log(reversNumber(31));
console.log(reversNumber(-31));
console.log(reversNumber(3));
console.log(reversNumber(31234));

//задача 3 определение числа как степень тройки и определение степени
const searchNumberDegree3 = (num) => {
       let answer = '';
       let searchnum = 1;
       for (let j = 0; searchnum <= num; j++){
            searchnum = 3**j;
            if (searchnum === num) {
                answer = num + ` число 3 в степени ` +j;  // что бы ответ был красив
                return answer;
            }
       }
    answer =  num + ` не является числом 3 в степени`;
    return answer;
}
console.log(searchNumberDegree3(1));
console.log(searchNumberDegree3(27));
console.log(searchNumberDegree3(25));
console.log(searchNumberDegree3(9));
console.log(searchNumberDegree3(6));

