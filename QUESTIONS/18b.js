//How to compare two arrays are equal or not in javascript?

var arr1=[2,9,6,8,4];
var arr2=[4,8,6,9,12];

const isArrsame=arr1.length==arr2.length && arr1.every((curEle)=>{
    if(arr2.indexOf(curEle)>-1){
        return(curEle=[arr2.indexOf(curEle)])
    }
})

console.log(isArrsame)