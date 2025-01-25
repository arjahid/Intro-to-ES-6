//1.How to declallre a variable using let and const
const fatherName='Ahshan ali';
let season='rainy'
season='winter'
//2. 6 basic conditation >,<,===,!==,<=,>=
 //multiple conditation : && , ||
 if(fatherName==='ahshan' || season==='rainy'){

 }else if(fatherName ==='Ahshan ali'){

 }
 else{

 }
 //3.array declare,index,length,push,pop
 const numbers=[23,345,56,56,78];
 numbers.pop()
 numbers.push(5,6)
const l= numbers.length
console.log(l)
//4.for loop
for(let i=0;i<numbers.length;i++){
    const num=numbers[i]
    console.log(num)
}
//5.function
const mul=(p,q)=>{
    return p*q
}
const output=mul(2,5)
console.log(output)
//6.object
//3 way to access proparty
const student={
    name:"jahid",
    age:23,
    like:['programming','developer']
}
console.log(student.like)