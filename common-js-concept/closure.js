let stopwatch=()=>{
    let counter=0;
    return ()=>{
        counter++;
        return counter;
    }
}
let clock1=stopwatch();
let clock2=stopwatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock2());
console.log(clock2());