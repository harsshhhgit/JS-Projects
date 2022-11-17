const apiDetails = {
    apiKey: "582e5c6e14d5e281fa608a583bd83edb",
    apiUrl: " https://api.openweathermap.org/data/2.5/weather?q=",
    apiUrlAfter: "&units=metric&appid="
}

const searchBtn = document.getElementById('search-btn');
var searchBar = document.getElementById('search-bar');
var data = document.getElementById('data');

function weatherReport(cityName) {
    fetch(apiDetails.apiUrl+cityName+apiDetails.apiUrlAfter+apiDetails.apiKey)
    .then((resp) => resp.json())
    .then((data) => {
        document.querySelector('.city').innerText = `Weather in ${data.name}`;
        document.querySelector('.temp').innerText = `${data.main.temp}°C`;
        document.querySelector('.weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        document.querySelector('.description').innerText = `${data.weather[0].main}`;
        document.querySelector('.humidity').innerText = `Humidity: ${data.main.humidity}%`;
        document.querySelector('.wind').innerText = `Wind Speed: ${data.wind.speed}km/h`;
        // document.getElementById('data').innerHTML = 
        // `<h2 class="city">Weather in ${data.name}</h2>
        // <h1 class="temp">${data.main.temp}°C</h1>
        // <div class="report">
        //     <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="weather-icon">
        //     <div class="description">${data.weather[0].main}</div>
        // </div>
        // <div class="humidity">Humidity: ${data.main.humidity}%</div>
        // <div class="wind">Wind Speed: ${data.wind.speed}km/h</div>`
        document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?" + ${data.name} + "')`;
    })
    .catch(() =>{
        document.getElementById('data').innerHTML=`<h2>City does not exist</h2>`
    })
}

window.addEventListener('load', () => {
    weatherReport('Dhanbad')
})

searchBtn.addEventListener('click', () => weatherReport(searchBar.value));
searchBar.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        weatherReport(searchBar.value);
    }
});
