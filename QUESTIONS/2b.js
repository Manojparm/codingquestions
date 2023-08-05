// Q2: find the developer from an array of object
let team=[
    {
        name:"Manoj",
        position:"developer"
    },
    {
        name: "Komal",
        position:"developer"
    },
    {
        name:"Gautam",
        position:"data sceintist"
    },
    {
        name:"Aashis" ,
        position:"Actor"
    },
    {
        name: "Milan" ,
        position:"developer"
    }
]

let newTeam=team.filter(el=>el.position=="developer");
console.log(newTeam);
