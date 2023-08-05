// //area of circles

// const radius=[3,1,2,4];


// const area=()=>{
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//  output.push(Math.PI*radius[i]*radius[i]);

//   }
//   return output;
// }

// console.log(area(radius));

// //circumference of circle

// const circumference=()=>{
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(2*Math.PI*radius[i]);
//     }
//     return output;
// }

// console.log(circumference(radius));

// //diameter of a circle

// const Diameter=()=>{
//     let output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(2*radius[i]);
//     }
//     return output;
// }

// console.log(Diameter())


const radius=[3,1,2,4];

const area=function (radius){
  return  Math.PI*radius*radius;
}

const circumference=function (radius){
  return 2*Math.PI*radius;
}

const diameter=function (radius){
  return 2*radius;
}


const calculate=function (radius,logic){
   const output=[];
   for(let i=0;i<radius.length;i++) {
    output.push(logic(radius[i]));
   } 
   return output;
}

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));