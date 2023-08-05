//check whether the given number is prime of not:


const chekPrime=(num)=>{
    if(num<2){
        console.log("number is not prime");
    }
    else{
        for(let i=2;i<num;i++){
            if(num%i==0){
                console.log("number is not prime");
            }
            else{
           return  console.log("number is prime");
            }    }
    }
}

chekPrime(5);