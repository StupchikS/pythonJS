const anyfunction1 = num => {
            if ( num >5) {
             return ('Число больше 5');
            }
             else  { 
             return ('число меньше или равно 5');
             }}
            };
console.log(anyfunction1(.string));
//  Выше пример синтаксической ошибки, точка , хотя строку воспринимает и лишняя }
const anyfunction2 = num => {
    if ( num > 'str') {
     const anyfunction2 = num => {
    if ( num > 'str') {
     return ('Число больше 5');
    }
     else  { 
     return ('число меньше или равно 5');
     }
    };
console.log(anyfunction2(7)); ('Число больше 5');
    }
     else  { 
     return ('число меньше или равно 5');
     }
    };
console.log(anyfunction2(7));
// пример reference error число сравниваем со строкой.
const anyfunction3 = num => {
    const num=anyfunction3(7);
    if (num > 5) {
     return ('Число больше 5');
    }
     else  { 
     return ('число меньше или равно 5');
     }
    };

console.log(anyfunction3(7));
//по type error не хотелось повторять ваш пример,  свой не придумал, сделаю в будущем.