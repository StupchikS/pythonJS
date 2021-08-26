// задача 1 с помощью условного оператора найти наименьшее и наибольшее из трех целых чисел

const minMaxNumber1=(num1, num2, num3) => { 
            let min=0;
            let max=0;
            if (num1 > num2) {
               max = num1, min = num2;
            }  else {
               max = num2, min = num1;
            }  if (max < num3) {
               max = num3;
            }  
               if (min > num3) {
                  min = num3;
               };
           return {
              min, max
           };
};   
            console.log(minMaxNumber1(16, -4, 12));

// задача 2 с помощью тернарного оператора найти наименьшее и наибольшее из трех целых чисел

const minMaxNumber2=(num1, num2, num3) => { 
   let min=0;
   let max=0;
   const MinMax1 = (num1>num2)? (max = num1, min = num2):(max = num2, min = num1);  
   const MinMax2 = (max<num3)?(max=num3):null; //null потому что пустоту отображает как ошибку, требует выражение
   const MinMax3 = (min>num3)?(min=num3): null;
   return  {
      min, max
   };
  
};   
   console.log(minMaxNumber2(64, 18, 22));

// задача 3 вывести нечетные числа от 0 до 100 или п цикл while

const oddNumbers=(n) => {
   let oddnum = 1;
   let result = '';
   while (oddnum <= n) {
      result=result + ' ' + `${oddnum}`;
      oddnum=oddnum+2;    
   }
   return result; 
};
console.log(oddNumbers(100));

// задача 4, переворот строки
const oppositString = str => {
   let i= str.length - 1;   // потому что индекс первого символа 0, а последнего, длина и минус 1, или можно убрать еденицу здесь, а в цикле сначала ее отнять 
   let result = "";         // и потом записать элемент с индексом
   while (i >= 0) {
      result=result + str[i];
      i = i - 1;
   }
   return result;
};
console.log(oppositString("Абра Кадабра"));
