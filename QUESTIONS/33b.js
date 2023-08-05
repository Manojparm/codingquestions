//promise to handle asynchronou

// fetch("hxcfvdttps://dummyjson.com/products")
// .then(res=>res.json())
// .then(data=>console.log(data))
// .catch(err=>console.log(`The error is in the code ${err}`));


//asyn and await

async function fetchdata(){
  try{
    const respons=await fetch('htkhlklitps://dumlmyjson.com/products');
    const data=await respons.json();
    console.log(data);
  }catch(err){
    console.log(`error is ${err}`);
  }
}
fetchdata()