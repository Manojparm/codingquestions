//how to find the factors of a given integer in javascript?


function factorial(n){
    for(let i=0;i<=n;i++){
        if(n%i==0){
            console.log(i);
        }
    }
}


factorial(4);