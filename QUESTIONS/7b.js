
// Q7 find second largest value and remove firt largest value
 //from the array.

 const intArray=[2,8,9,7];
 const largestValue=(arr)=>{
  let firstLargestValue=Math.max(...arr)
  index=arr.indexOf(firstLargestValue)
  arr.splice(index,1);
  let secondLargestValue=Math.max(...arr)
     return(secondLargestValue);
 }

console.log(largestValue(intArray))