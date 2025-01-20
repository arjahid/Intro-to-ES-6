const getAge=(person)=>{
    return [person.age,person.name]
}
  
const student={name:"jahid hasan",age:23};
const age=getAge(student);
console.log(age)