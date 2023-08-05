//How to find intersection of two arrays/sets in javascript?

const arr1=[2,9,6,8,4,4,4];
const arr2=[4,8,6,9,12];

let intersectionArr=arr1.filter((el)=>{
    return arr2.includes(el)
})

console.log([...new Set(intersectionArr)])