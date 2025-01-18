const apiKey = "f57ccb5db3f240d66f22a0a8eb49b386 ";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let temp = document.querySelector(".temp");
let cityName = document.querySelector(".city");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let search = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404 || search.value == "") {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);
    cityName.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "km/s";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images\\clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images\\clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images\\rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images\\drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images\\mist.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images\\clear.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(search.value);
});
