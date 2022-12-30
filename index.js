let main = document.getElementById("main")



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
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function images(){
    return posts[0].avatar
}

function names(){
    return posts[0].name
}
function locations(){
    return posts[0].location
}

function post(){
    return posts[0].post
}
function likes(){
    return posts[0].likes
} 
function comments(){
    return posts[0].comment
}

function username2(){
    return posts[0].username
}



main.innerHTML +=
`<section class="container-1">
    <img src="/photos/oldagram-logo.svg" id="logo" alt="Logo"/>
    <img src="/photos/person-circle.svg" class="profile-icon"/>

</section>

<section>
    <img class="img-avatar" src=${images()} alt = avatar of ${names()}  />
    <p id="username">${names()}</p>
    <p id ="location">${locations()}
</section>
<section>
    <img id="profile-pic" alt="vango post" src="${post()}"/>
</section>
<section class="container-2">
    <img id=" like" alt="like" src="photos/like.svg" />
    <img id=" coment" alt="coment" src="photos/comment.svg" />
    <img id=" share" alt="share" src="photos/share.svg" />
</section>
<section class="likes">
    <p>${likes()} likes</p>
</section>
<section class="comment">
    <p><span id="comment-username">${username2()}</span> ${comments()}</p>
</section>
<br>





`