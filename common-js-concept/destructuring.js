const number=[42,45]
const [num1,num2]=number
console.log(num1,num2) // 42 
// 
const boxify=(num1,num2)=>{
    const nums=[num1,num2]
    return nums;
}
const [box1,box2]=boxify(42,45)
console.log(box1,box2) // 42 45
//^array destructuring
const student={
    name:'jahid',
    age:23,
    movies:['king khan','goriber vai']
}
const [firstMovie,secondMovie]=student.movies
//^object destructuring
const employee={
    ide:'vs code',
    designation:'developer',
    machine:'mac',
    languages:['html','css','js'],
    specification:{
        height:66,
        weight:60,
        address:'kumarkhali'}
}
const {machine,ide}=employee;
const {weight,address}=employee.specification;
const [...languages]=employee.languages;
console.log(languages)