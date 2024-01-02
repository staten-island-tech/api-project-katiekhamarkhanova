import { searchWeatherByCity } from "./main.js";

const DOMSelectors = {
  form: document.querySelector("#form"),
  box: document.querySelector(".container-box"),
  input: document.querySelector("#input"),
  citySearch: document.querySelector(".city-search"),
  app: document.querySelector("#app"),
  appForecast: document.querySelector("#forecast"),
}

function submitCitySearch() {
DOMSelectors.form.addEventListener('submit', function(event) {
  event.preventDefault();
  const cityInput = DOMSelectors.input.value;
  searchWeatherByCity(cityInput);
})};
submitCitySearch();

function addCard(data, i) {
  function removeTime(date) {
    let x = Array.from(date);
    x.splice(-10)
    const y = x.join('');
    return y;
  }
  DOMSelectors.appForecast.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <h2>${removeTime(data.timelines.daily[i].time)}</h2>
      <h3>Temperature: ${data.timelines.daily[i].values.temperatureAvg}°F</h3>
      <p>Cloud Cover: ${data.timelines.daily[i].values.cloudCoverAvg}%</p>
      <p>Dew Point: ${data.timelines.daily[i].values.dewPointAvg}°F</p>
      <p>Humidity: ${data.timelines.daily[i].values.humidityAvg}%</p>
      <p>Precipitation Probability: ${data.timelines.daily[i].values.precipitationProbabilityAvg}%</p>
      <p>UV Index: ${data.timelines.daily[i].values.uvIndexAvg}</p>
      <p>Visibility: ${data.timelines.daily[i].values.visibilityAvg} miles</p>
      <p>Wind Gust: ${data.timelines.daily[i].values.windGustAvg} mph</p>
      <p>Wind Speed: ${data.timelines.daily[i].values.windSpeedAvg} mph</p>
      <p>Pressure: ${data.timelines.daily[i].values.pressureSurfaceLevelAvg} </p>
    </div>`
  );
}
export { addCard };

