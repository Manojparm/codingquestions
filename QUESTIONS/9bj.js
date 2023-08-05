//Q9 How to find the sum of all the elements in a given array .
const arrNumbers=[1,2,3,4,5,6,7];
const findTotal=(arr)=>{
    return arr.reduce((pre,curr)=>{
        return pre+curr;
    })
}
console.log(findTotal(arrNumbers));