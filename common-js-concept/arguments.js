const sum=(a,b,c)=> {
    const args=[...arguments]
    const result=a+b+c;
    return result;
}
const total=sum(1,2,3);
console.log(total)