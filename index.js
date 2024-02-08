const searchBtnEl = document.querySelector(".btn");
const tempEl = document.querySelector("#temp");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#windSpeed");
const inputEl = document.querySelector(".input");
const cityName = document.querySelector("#cityName");
const weatherImg = document.querySelector("#weatherImg");

searchBtnEl.addEventListener("click",async ()=>{
const city = inputEl.value;
var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8641b3b20c2666f79ceb0183390b0e5e&units=metric`;

const veri = await(await fetch(url)).json();

if(veri.weather.length > 0){
    const weather = veri.weather[0].main
    if(weather === "Clouds"){
        weatherImg.src = "images/clouds.png"
    }
    else if(weather === "Clear"){
        weatherImg.src = "images/clear.png"
    }
    else if(weather === "Snow"){
        weatherImg.src = "images/Snow.png"
    }
    else if(weather === "Rain"){
        weatherImg.src = "images/rain.png"
    }
    else if(weather === "Mist"){
        weatherImg.src = "images/mist.png"
    }
    
} ;




cityName.innerHTML = veri.name;

tempEl.innerHTML = veri.main.temp;

humidity.innerHTML=veri.main.humidity;

windSpeed.innerHTML=veri.wind.speed;




   console.log(veri);
})