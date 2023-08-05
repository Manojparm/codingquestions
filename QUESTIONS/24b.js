//Program to print fibonachi sequence

let a=0;
let b=1;
for(let i=0;i<=15;i++){
    let temp=a+b;
    a=b;
    b=temp;
    console.log(temp);
}