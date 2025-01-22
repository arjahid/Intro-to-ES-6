const loadPost=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res =>res.json())
    .then(data=>displayPost(data))
}
function displayPost(data){
    const postContainer=document.getElementById('post-container')
    for(const post of data){
        console.log(post)
        const div=document.createElement('div');
        div.classList.add('post')
        div.innerHTML=`
        <h4>user :${post.userId}</h4>
        <h5>post tittle:${post.title}</h5>
        <p>post description:${post.body}</p>`
        postContainer.appendChild(div)

  }

}
loadPost();