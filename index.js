let main = document.getElementById("main")
let head = document.getElementById("head")


let posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "photos/avatar-vangogh.jpg",
        post: "photos/post-vangogh.jpg",
        comment: "should of took a nap",
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
        <button id="like-btn" onclick="toggle1(${i})"><img id="like${i}" alt="liked" src="photos/like.svg" /></button>
        <button id="comment-btn"><img id=" coment" alt="coment" src="photos/comment.svg" /></button>
        <button id="share-btn"><img id=" share" alt="share" src="photos/share.svg" /></button>
    </section>
    <section class="likes" id="likes${i}">
    <p>${likes()} likes</p>
  </section>
    <section class="comment">
        <p><span id="comment-username">${username2()}</span> ${comments()}</p>
    </section>
    <div class= "line" >
    </div>
    `
}

function toggle1(i) {
    let displayImage = document.getElementById(`like${i}`);
    let likesElement = document.getElementById(`likes${i}`);
  
    if (displayImage.src.match("photos/like.svg")) {
      displayImage.src = "photos/like1.svg";
      posts[i].likes = posts[i].likes + 1;
    } else {
      displayImage.src = "photos/like.svg";
      posts[i].likes = posts[i].likes - 1;
    }
  
    likesElement.innerHTML = `<p>${posts[i].likes} likes</p>`;
  }
  

