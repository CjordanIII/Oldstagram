let main = document.getElementById("main")
let head = document.getElementById("head")
let btn1 = document.getElementById("like-btn")


const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "photos/avatar-vangogh.jpg",
        post: "photos/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "photos/avatar-courbet.jpg",
        post: "photos/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "photos/avatar-ducreux.jpg",
        post: "photos/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]



head.innerHTML =
`<section class="container-1">
<img src="/photos/oldagram-logo.svg" id="logo" alt="Logo"/>
<img src="/photos/person-circle.svg" class="profile-icon"/>

</section>`

function render(){

        main.innerHTML +=
    `<section>
        <img class="img-avatar" src=${images()} alt = avatar of ${names()}  />
        <p id="username">${names()}</p>
        <p id ="location">${locations()}
    </section>
    <section>
        <img id="profile-pic" alt="post" src="${post()}"/>
    </section>
    <section class="container-2">
        <button id="like-btn" Onclick="toggle1()"><img id=" like" alt="liked" src="photos/like.svg" /></button>
        <button id="comment-btn"><img id=" coment" alt="coment" src="photos/comment.svg" /></button>
        <button id="share-btn"><img id=" share" alt="share" src="photos/share.svg" /></button>
    </section>
    <section class="likes">
        <p>${likes()} likes</p>
    </section>
    <section class="comment">
        <p><span id="comment-username">${username2()}</span> ${comments()}</p>
    </section>
    <div class= "line" >
    </div>
    `
}

for(let i = 0; i<posts.length; i++){
    function images(){
        return posts[i].avatar
    }
    function names(){
        return posts[i].name
    }
    function locations(){
        return posts[i].location
    }
    
    function post(){
        return posts[i].post
    }
    function likes(){
        return posts[i].likes
    } 
    function comments(){
        return posts[i].comment
    }
    
    function username2(){
        return posts[i].username
    }
 
    
    render()

}

/*    function toggle1(){
    if(btn1.style.color=="red"){
        btn1.style.color="grey"
    }
    else{
        btn1.style.color="red"
    }
} 
 */
