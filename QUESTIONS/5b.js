// Q5find the maximum value from the array
const arrNumber=[1,9,87,65,655];
const maxFuction=(arr)=>{
    return arr.reduce(function(pre,cur){
      return pre>cur?pre:cur
    })
}
console.log(maxFuction(arrNumber));