/* <>
💡 Question 1
 Given an array nums containing n distinct numbers in the range
[0, n],return the only number in the range that is missing from
the array.

  Example 1:
  Input: nums = [3,0,1]**
  Output: 2

Explanation: n = 3 since there are 3 numbers, so all numbers
are in the range [0,3]. 2 is the missing number in the range
since it does not appear in nums.**

TC: O(n)
SC: O (n)
*/

function missingNumber(nums){
    let mySet=new Set(nums);
     
    let expectedNumCount=nums.length+1;
   for(let number=0;number<expectedNumCount;number++){
    if(!mySet.has(number)){
        return number;
    }
 
   }
   
}



console.log(missingNumber([3,0,1]));