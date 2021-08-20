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
