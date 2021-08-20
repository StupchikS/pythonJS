const fizzBuzz=(numbegin, numend) => { 
                for (let i= numbegin; i<= numend; i++) {
                     if ((i%3===0) && (i%5===0)) {
                         console.log ('FizzBuzz');
                           }
                    if (i%3===0) {
                        console.log ('Fizz');
                           }
                    if (i%5===0) {
                        console.log ('Buzz');
                        }
                         else  {
                            console.log (i);
                         }
               };
            };
            console.log(fizzBuzz(11,20));
            