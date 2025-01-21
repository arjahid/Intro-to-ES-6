const instructor=[
    {name:'jahid',age:23,position:'senior'},
    {name:'akhil',age:26,position:'junior'},
    {name:'sobuj',age:30,position:'senior'}
]
const result=instructor.filter(ins=>ins.position ==='senior');
console.log(result);