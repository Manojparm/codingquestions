//How to reverse a string;

const reverseString=(str)=>{
    const stringToArray=str.split("");
    const reverseArray=stringToArray.reverse();
    const joinreversArrayToSring=reverseArray.join("");
    console.log(joinreversArrayToSring);
   }
   
   
   reverseString("Manoj");