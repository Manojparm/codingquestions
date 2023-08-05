/* Power of Two
problem:Give a positive integer 'n',determine if the number is a 
power of 2 or not 
An integer is a power of two if there exists an
integer 'x' such that 'n'==2X

isPowerOfTwo(1)=true(2^0)
isPowerOfTwo(2)=true(2^1)
isPowerOfTwo(5)=false

power of two-pseudocode

   n=8
   8/2=4(remainder 0)
   4/2=2(remainder 0)
   2/2=1(remainder 0)
   if remainder is not 0 in any step,'n' is not a power of two
   if remainder is 0 and 'n' comes down to 1 eventually, ni is a 
   power of two.
*/

function isPowerOfTwo(n){
    if(n<1){
        return false;
    }
    while(n>1){
        if(n%2!==0){
            return false;
        }
        n=n/2;
    }
    return true;
}
console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(5))


// Bif O = O log(n)



/* Notes: Recursion
what?
Recursion is a problem solving technique where the solution depends
on solutions to smaller instances of the same problem.

Recursion is when a function calls itself.

why?
A great techniqe to simplify your solution.

if you find yourself breaking down your problem into smaller versions
of the same problem,recursion in very useful.

A few points about recursion:
Every recursive solution needs to have a base case-a condition to
terminate the recursion.

Recursion might simplify solving a problem but it does not always
translate to a faster solution.A recursive solution may be far
worse compared to an interactive solution.

*/