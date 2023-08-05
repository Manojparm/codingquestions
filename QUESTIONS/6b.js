//Q6 find the minimum value from the array


let arrynumbers=[0,3,5,,7,54,3,5,-1];
let minElement=(el)=>{
   return el.reduce(function(pre,curr){
    return pre<curr?pre:curr;
   })
}
console.log(minElement(arrynumbers));