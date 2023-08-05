//How to find the number of occurences of a character in
//string in javascript?

const str="Helloo"
const letter="o";

let strLength=str.length;
let countOccurence=0
for(let i=0;i<strLength;i++){
    if(str[i]==letter){
      countOccurence++
    }
}

console.log(countOccurence);