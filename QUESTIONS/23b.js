//Program to convert first letter of a String in to Uppercase

//charAt():It is used to get a character at an index.

var inputString="manoj";

const firstLetterCapital=(str)=>{
    let newStr=str.split(" ");
    const newArr=newStr.map((el)=>{
        return el.charAt(0).toUpperCase()+el.slice(1);
    })

   return newArr.join(" ");
};

console.log(firstLetterCapital(inputString));