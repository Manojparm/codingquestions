
// Q8 How to find missing number in a given integer array 1 to 10.
const arrayNum=[1,2,3,4,5,6,9,10];
const missArray=[];
const missingValue=(arr)=>{
    const minValue=Math.min(...arr);
    const maxValue=Math.max(...arr);
    for(let i=minValue;i<maxValue;i++){
        if(arr.indexOf(i)<0){
        missArray.push(i);
        }
    }
    return missArray;

}
console.log(missingValue(arrayNum));