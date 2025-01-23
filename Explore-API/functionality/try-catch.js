const checkAge=()=>{
    const age=document.getElementById('age').value;
    const errorTag=document.getElementById('error')
    try{
        console.log(something)
        const age=parseInt(age)
        if(isNaN(age)){
            // console.log('is not s number',age,);
            throw 'is not a number'
        }
        else if(age<18){
            throw 'bacca is not allowed'
        }else if(age>60){
            throw 'old person is not allowed'
        }
        errorTag.innerText=''
    }catch(err){
        console.log('error find here',err)
        errorTag.innerText='error find here' +err
    }finally{
        console.log("all done here")
    }
}