//Program to print the table of any user defined number
//using function in js.

const table=(num)=>{
for(let i=1;i<=10;i++){
     let res=i*num;
      console.log(`${num} * ${i} =${res}`);
}
}

 table(5);