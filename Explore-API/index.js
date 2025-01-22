const loadUsers=()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data =>display(data))
}
const display=(data)=>{
    const div=document.getElementById('user-list')
    for(const user of data){
        const li=document.createElement('li')
        li.innerText=user.name;
        div.appendChild(li);
    }
}