const loadData=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res =>res.json())
    .then(data =>displayPost(data))
}
function displayPost(data){
const postContainer=document.getElementById('list-container')
for(const datalist of data ){
    const div=document.createElement('div');
    div.classList.add('post');
    div.innerHTML=`
    <h4>User ${datalist.userId}</h4>
    <h3>title:${datalist.title}</h3>
    <p>desc:${datalist.body}</p>`
    postContainer.appendChild(div);
}
}
loadData();