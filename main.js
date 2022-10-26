const nameFromBox = document.querySelector(".search-box");
const btn = document.querySelector(".button");
const cityD = document.querySelector(".city-name");
const tempD = document.querySelector(".temp");
const descriptionD = document.querySelector(".details");
const humidityD = document.querySelector(".humidity");
const windD = document.querySelector(".wind");
const imgD = document.querySelector(".img");
const apiKey = "0ef5039cccae2e4bc931120f0214c7d9";
const division = document.querySelector(".hide");
// let fullSite = `https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=${apiKey}`;

btn.addEventListener("click", () => {
    fetchWeather(nameFromBox.value);
})

const fetchWeather = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then((response) => response.json())
    .then((data) => displayDetails(data));
}

const displayDetails = (data) => {
    const {name} = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    cityD.innerHTML = name;
    tempD.innerHTML = temp + "°C";
    descriptionD.innerHTML = description;
    imgD.src = `https://openweathermap.org/img/wn/${icon}.png`;
    humidityD.innerHTML = `Humidity : ${humidity}%`;
    windD.innerHTML = `Wind : ${speed} km/h`;
    division.classList.remove("show");
}

nameFromBox.addEventListener("keyup", (event) => {
    if(event.key === "Enter"){
        fetchWeather(nameFromBox.value);
    }
})

