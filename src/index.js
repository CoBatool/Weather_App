//feature#1
let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let apiKey = "c0bb81e41f37cb84ef0d151cf8f30f79";

let currentTime = document.querySelector("#currentTime");
currentTime.innerHTML = `${
  days[now.getDay()]
} ${now.getHours()} : ${now.getMinutes()}`;

//feature #2

function searchCity(event) {
  event.preventDefault();
  let cityValue = document.querySelector("#searchCity");
  let currentCity = document.querySelector("#currentLocation");
  currentCity.innerHTML = cityValue.value;
  debugger;
  let place = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue.value}&appid=${apiKey}&&units=metric`;
  axios.get(place).then(showTemperature);
}

let searchBtn = document.querySelector("#locationSearch");
searchBtn.addEventListener("submit", searchCity);

// Updates live Temperature

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
  //locate me right now
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  debugger;
  let currentLocationTemp = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
  axios.get(currentLocationTemp).then(showTemperature);
}

function showTemperature(response) {
  debugger;
  let currentTemp = response.data.main.temp;
  let changeTemp = document.querySelector("#currentTemp");
  let currentCityName = response.data.name;
  let currentCity = document.querySelector("#currentLocation");
  currentCity.innerHTML = currentCityName;

  changeTemp.innerHTML = `${Math.round(currentTemp)}°C`;
}

let locateMeBtn = document.querySelector(".locateMeBtn");
locateMeBtn.addEventListener("click", getCurrentPosition);

//et searchMeBtn = document.querySelector(".searchBtn");
//searchMeBtn.addEventListener("click", cityTemp);
