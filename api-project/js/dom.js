import { searchWeatherByCity } from "./main.js";

const DOMSelectors = {
  form: document.querySelector("#form"),
  box: document.querySelector(".container-box"),
  input: document.querySelector("#input"),
  citySearch: document.querySelector(".city-search"),
  allInfo: document.querySelector("#info"),
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

function errorPage() {
  DOMSelectors.allInfo.innerHTML = '';
  DOMSelectors.allInfo.insertAdjacentHTML(
    "beforeend",
    `<div>
    <h2>ERROR</h2>
     <h3>Sorry, I could not find the city you were looking for! Check your spelling.</h3>
     </div>`
  );
}
export { errorPage }

function removeErrorPage() {
  const errorElement = document.querySelector('.error-message');
  if (errorElement) {
    errorElement.remove();
  }
}
export { removeErrorPage }