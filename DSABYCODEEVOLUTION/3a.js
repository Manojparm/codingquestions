/*
Problem:Give a nutural number 'n',determine if the number is prime
or not.

A prime number is a natural number greater than 1 that is not a 
product of two smaller natural numbers.
 
isPrime(5)=true (1*5 or 5*1)
isPrime(4)=false (1*4 or 2*2 or 4*1)
*/

function isPrime(n){
    if(n<2){
        return false;
    }
    for(let i=2;i<n;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(1));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(2));

//Big O =o(n)

//optimizied primality Test
//integers larger than the square root do not need to be checked
//becauese,whenver 'n=a*b',one of the two facotors 'a' and 'b' is
//less than or equal to the square root of n

function isPrime(n){
    if(n<2){
        return false;
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(1));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(2));