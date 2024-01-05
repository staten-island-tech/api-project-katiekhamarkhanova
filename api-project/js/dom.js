import { searchWeatherByCity } from "./main.js";

function submitCitySearch() {
  document.querySelector("#form").addEventListener("submit", function (event) {
    event.preventDefault();
    const cityInput = document.querySelector("#input").value;
    searchWeatherByCity(cityInput);
  });
}
submitCitySearch();

function addCard(data, i) {
  function removeTime(date) {
    let x = Array.from(date);
    x.splice(-10);
    const y = x.join("");
    return y;
  }
  document.querySelector("#forecast").insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <h2>${removeTime(data.timelines.daily[i].time)}</h2>
      <p>Temperature: ${data.timelines.daily[i].values.temperatureAvg}°F</p>
      <p>Cloud Cover: ${data.timelines.daily[i].values.cloudCoverAvg}%</p>
      <p>Dew Point: ${data.timelines.daily[i].values.dewPointAvg}°F</p>
      <p>Humidity: ${data.timelines.daily[i].values.humidityAvg}%</p>
      <p>Precipitation Probability: ${
        data.timelines.daily[i].values.precipitationProbabilityAvg
      }%</p>
      <p>UV Index: ${data.timelines.daily[i].values.uvIndexAvg}</p>
      <p>Visibility: ${data.timelines.daily[i].values.visibilityAvg} miles</p>
      <p>Wind Gust: ${data.timelines.daily[i].values.windGustAvg} mph</p>
      <p>Wind Speed: ${data.timelines.daily[i].values.windSpeedAvg} mph</p>
      <p>Pressure: ${
        data.timelines.daily[i].values.pressureSurfaceLevelAvg
      } </p>
    </div>`
  )
}
export { addCard };

function errorPage() {
  document.getElementById("forecast").innerHTML = "";
  document.getElementById("locationName").textContent = "ERROR";
  document.getElementById("weatherForecastTitle").textContent =
    "Sorry, I could not find the city you were looking for! Check your spelling.";
}
export { errorPage };

function clearFields() {
  document.querySelector("#form").addEventListener("submit", function (event) {
    event.preventDefault();
    document.querySelector("#input").value = "";
    });
  };

clearFields();