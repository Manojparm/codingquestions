//. Given an array of objects users, print fullname.
const users=[
    {firstName:"john",lastName:"Biden",age:26},
    {firstName:"jimmy",lastName:"cob",age:75},
    {firstName:"sam",lastName:"lewis",age:50},
    {firstName:"Ronald",lastName:"Mathew",age:26},  
  ];


  const fullName=users.map((el)=>el.firstName+" " + el.lastName);
  console.log(fullName);