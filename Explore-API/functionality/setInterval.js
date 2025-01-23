let num=0;
const clockId=setInterval(()=>{
    num++
    if(num>10){
        clearInterval(clockId)
        console.log('done')
    }
    console.log(num);
})