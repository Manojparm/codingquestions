//find the factorial of a given number:


const factorial=()=>{
    const num=5;
    let fact=1;
    if(num<1){
        return ;
    }  else{
        for(let i=1;i<=num;i++){
            fact=fact*1;
        }
        console.log(`factorial of the give number is ${fact}`);
    }

}

factorial();