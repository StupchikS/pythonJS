<<<<<<< Updated upstream
const fizzBuzz=(numbegin, numend) => { 
        while (numbegin <= numend) numbegin++ 
            if ( (numbegin % 3) && (numbegin % 5)) {
             return ('FizzBuzz');
            }
            if (numbegin % 3) {
            return ('Fizz');
            }
             if (numbegin % 5) {
            return ('Buzz');
            }
            else  return (numbegin);
};
console.log(fizzBuzz);
=======
//Задача 1 вывести простые числа, делящиеся только на себя
const primeNumber=(n)=>{
   let result = "1";    //еденицу сразу вписываем, ее проверять смысла нет
   mark:                //подсмотрел как сделать метку в интернете
   for(let i = 2; i <= n; i++){
      for(let j = 2; j < i; j++){
         if (i % j === 0){
            continue mark;   //так как в этом случае делать ничего не надо, то просто идем за следующим i, break без метки делает ошибку вылазит 9 15 и тп
         }    
      }
         result+=" "+`${i}`;
   }
   return result; 
}
console.log(primeNumber(1000));

//задача 2 Необходимо складывать все входящие в него цифры до тех пор, пока не останется одна цифра

// const addNumber=(num)=>{
//    let numVar = num;
//    let summaNumber=0;
//    marker:
//    let index=length(numVar) - 1;
//    let stringOffNum = String.numVar;
//    while (index >= 0){
//          summaNumber+=number(stringOffNum[index]);
//          index--;
//    }
//    if (summaNumber > 9) {
//       numvar=summaNumber;
//       continue marker;
//    }
//    return summaNumber;

// }
// console.log(addNumber(38));
// В общем много проблем, несколько let синтаксическая ошибка, хотя var проглатывает и вторую метку не берет логика понятна попробуем по другому

const addNumber=(num)=>{
      let numVar = num;
      
      const cicleNum=(numvar,summaNumber)=>{
         summaNumber = 0;
         let stringOffNum = String.numVar;
         //top:                                                     проблема в том, что я не знаю как сюда вернуть программу с новым условием
         for (let index = 0; index <= length(numvar); index++){     // так как break и continue работают только внутри цикла, а у меня if за пределами, внутр его нельзя поставить
                 summaNumber+=number(stringOffNum[index]);          // вдруг число большое, много знаков.???????????
            
               }
      }
      if (summaNumber > 9) {
         numvar=summaNumber;
        // break top;                        //делать несколько циклов, но сколько я неи знаю какое число, количество знаков
      }
      return summaNumber;
   
   }
   console.log(addNumber(38));
>>>>>>> Stashed changes
