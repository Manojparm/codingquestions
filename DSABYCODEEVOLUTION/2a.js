/*
Factorial of a number 

Problem:2 Give an integer 'n', find the factorial of that integer.

In mathematics,the factorial of a non-negative integer 'n',
denoted n!, is the product of positive integers less than or
equal to 'n'.

Factorial of 0 is 1.
factorial(4)=4*3*2*1=24
factorial(5)=5*4*3*2*1=120
*/

//solution problem  2:

function factorial (n){
    let  result=1;
       for(let i=2;i<=n;i++){
           result=result*i;
       }
       return result;
   }
   console.log(factorial(0));
   console.log(factorial(3));
   console.log(factorial(4));
   console.log(factorial(5));
   
   
   