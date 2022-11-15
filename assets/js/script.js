const apiUrl = '../assets/projects.json';
window.addEventListener('load', () => {
    fetch(apiUrl)
    .then((resp) => resp.json())
    .then((data) => {
        let card = "";
        for(const x in data){
            card+=`<div class="cards">
            <div class="card-body">
                <h2 class="card-title">${data[x].name}</h2>
                <p class="card-text">${data[x].description}</p>
                <a href="${data[x].link}" class="btn">Visit Site<img src="./assets/icons/arrow-up.svg" alt="arrow-up" class="arrow-up"></a>
            </div>
        </div>`
        }
        document.getElementById('cards-group').innerHTML = card;
    })
})

// function cardData(){
//     fetch('../assets/projects.json')
//     .then((resp) => resp.json())
//     .then((data) => console.log(data))
// }

// cardData();