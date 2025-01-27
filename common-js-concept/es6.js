const number = [1, 22, 33, 44, 56];
// const student = {
//     name: 'jahid',
//     age: 23,
//     movied: ['king khan', 'goriber vai']
// };
// const about = `my name is ${student.name} age of ${student.age} has number ${number[2]} like movie ${student.movied[0]}`;
// console.log(about);
// //arrow function
// let numbers=()=>{

// }
//spread operator
const firstArray = [1, 2, 3, 4, 5];

const newArray = [...firstArray];

newArray.push(6);
console.log(firstArray);

console.log(newArray);
