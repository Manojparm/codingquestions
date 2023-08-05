/* Q3: write a program to print duplicate values */

let myArr=[1,3,5,6,67,4,3,6,5];
let duplicatearr=myArr.filter((el,index,arr)=>arr.indexOf(el)!==index);
console.log(duplicatearr);