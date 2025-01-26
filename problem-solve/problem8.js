const joke=()=>{
    let count=0;
    const interval=setInterval(()=>{
        console.log("i am a joker ")
        count +=2;
        if(count >10){
            clearInterval(interval)
        }
    },2000)
}
joke();