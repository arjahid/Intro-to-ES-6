const people=[
    {name:'jahid',age:23},
    {name:'hasan',age:15},
    {name:'baby',age:22},
]
const totalAge=people.reduce((acc,person)=>acc+person.age,0);
console.log(totalAge);
