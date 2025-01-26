const myLoader=()=>{
    return new Promise((resolve,reject)=>{
        const success=Math.random();
        if(success>0.5){
            resolve(success)
        }else{
            reject(success)
        }
    })
}
myLoader().then(data=>console.log('resolved:',data)).catch(data=>console.log('rejected:',data)) 