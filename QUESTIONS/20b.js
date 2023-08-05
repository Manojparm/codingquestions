//Unions of Sets
//let set A={2,4,5,6}
//let set B={4,6,7,8}
//union of set={2,4,5,6,7,8}

//How to find union of two arrays/set in javascript?


const arr1=[1,2,6,8,17];
const arr2=[4,8,6,19,12];

const unionArr=[...arr1,...arr2];
console.log([...new Set(unionArr)]);