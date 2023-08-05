/*
  Recrusive Fibonacci Sequence

Tips for recursive solutions:
Figure out how to break down the problem into smaller versions of the
same problem identify the base of recursion.

*/
function recursiveFibonacci(n){
    if(n<2){
        return n;
    }
    return recursiveFibonacci(n-1)+ recursiveFibonacci(n-2);
}

console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(2));
console.log(recursiveFibonacci(3));
console.log(recursiveFibonacci(4));
console.log(recursiveFibonacci(5));
console.log(recursiveFibonacci(6));

// o(n)=interative
//0,1,1,2,3,5,8,13

