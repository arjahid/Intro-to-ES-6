const loadComment2=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/comments')
    const data= await res.json();
    console.log(data);
}
const loadComment3=async()=>{
 try{
    const res=fetch('https://jsonplaceholder.typicode.com/comments')
    const data=await res.json();
    console.log("data is connecting")
    console.log(data);
    }catch(err){
        console.log("data is connecting error")

    }
 }   
