// Step 1: Create an array
const firstArray = [1, 2, 3, 4, 5];

// Step 2: Create a new array and get values from the first array
const newArray = [...firstArray];
// for(let i = 0; i < firstArray.length; i++) {
//   newArray.push(firstArray[i]);
// }

// Step 3: Push a new element to the new array
newArray.push(6);
console.log(firstArray)

console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]
