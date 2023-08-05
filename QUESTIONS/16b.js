//merget the array and sort the array
const array=[3,6,4,5];
const array1=[1,0,8];

//mered the array using concate
const merged=array.concat(array1);
const shortedArray=merged.sort();
console.log(shortedArray);

//merged the array using spreed operatior

const mergedUsing=[...array,...array1];
const mysortedArray=mergedUsing.sort();
console.log(mergedUsing);