const userData = document.getElementById('output-data');
const apiUrl = 'https://api.github.com/users/';

// fetch('https://api.github.com/users/harsh1x4')
// .then((resp) => resp.json())
// .then((data) => {
//     console.log(data)
//     userData.innerHTML=`<div class="user-avatar">
//     <img src="${data.avatar_url}" alt="" class="avatar" id="avatar">
// </div>
// <div class="user-data" id="user-data">
//     <h2 id="name">${data.name}</h2>
//     <span id="username">${data.login}</span><br>
//     <span id="twitter"><a href="https://twitter.com/${data.twitter_username}"><i
//                 class="fa-brands fa-twitter"></i></a></span>&nbsp;&nbsp;<span id="blog_url"><a href="${data.blog}"><i
//                 class="fa-solid fa-link"></i></a></span><br>
//     <span>Following: <span id="following">${data.following}</span></span><br>
//     <span>Follower: <span id="followers">${data.followers}</span></span><br>
// </div>`
// })

function getUser(username) {
    if (username != "") {
        fetch(apiUrl + username)
            .then((resp) => resp.json())
            .then((data) => {
                userData.innerHTML = `<div class="user-avatar">
    <img src="${data.avatar_url}" alt="" class="avatar" id="avatar">
</div>
<div class="user-data" id="user-data">
    <h2 id="name">${data.name}</h2>
    <span id="username">${data.login}</span><br>
    <span id="twitter"><a href="https://twitter.com/${data.twitter_username}"><i
                class="fa-brands fa-twitter"></i></a></span>&nbsp;&nbsp;<span id="blog_url"><a href="${data.blog}"><i
                class="fa-solid fa-link"></i></a></span><br>
    <span>Following: <span id="following">${data.following}</span></span><br>
    <span>Follower: <span id="followers">${data.followers}</span></span><br>
</div>`
            })
            .catch(
                userData.innerHTML = `<h2>User doesn't exist</h2>`
            )
    }
    if (username === "") {
        userData.innerHTML = `<div class="user-avatar">
        <img src="./assets/avatar.png" alt="" class="avatar" id="avatar">
    </div>
    <div class="user-data" id="user-data">
        <h2 id="name">Name</h2>
        <span id="username">Username</span><br>
        <span id="twitter"><a href="https://twitter.com/"><i
                    class="fa-brands fa-twitter"></i></a></span>&nbsp;&nbsp;<span id="blog_url"><a href="https://github.com/harsh1x4"><i
                    class="fa-solid fa-link"></i></a></span><br>
        <span>Following: <span id="following">00</span></span><br>
        <span>Follower: <span id="followers">00</span></span><br>
    </div>`
    }

}

var inpWord = document.getElementById("search-bar")
inpWord.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        getUser(inpWord.value);
        // console.log(inpWord.value)
    }
    // if (event.key === "Enter" && inpWord.value === null) {
    //     userData.innerHTML = `<div class="user-avatar">
    //     <img src="./assets/avatar.png" alt="" class="avatar" id="avatar">
    // </div>
    // <div class="user-data" id="user-data">
    //     <h2 id="name">Name</h2>
    //     <span id="username">Username</span><br>
    //     <span id="twitter"><a href="https://twitter.com/"><i
    //                 class="fa-brands fa-twitter"></i></a></span>&nbsp;&nbsp;<span id="blog_url"><a href="https://github.com/harsh1x4"><i
    //                 class="fa-solid fa-link"></i></a></span><br>
    //     <span>Following: <span id="following">00</span></span><br>
    //     <span>Follower: <span id="followers">00</span></span><br>
    // </div>`
    // }
});