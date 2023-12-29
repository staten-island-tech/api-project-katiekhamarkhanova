const DOMSelectors = {
  form: document.querySelector("#form"),
  box: document.querySelector(".container-box"),
  input: document.querySelector("#input"),
  citySearch: document.querySelector(".city-search"),
  app: document.querySelector("#app"),
}

const userInput = DOMSelectors.input.value;
export { userInput };

DOMSelectors.form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log(userInput); 
});


/* DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault(); */
function addCard(data, i) {
  function removeTime(date) {
    let x = Array.from(date);
    x.splice(-10)
    const y = x.join('');
    console.log(y);
    return y;
  }
  function removeDate(time) {
    let z = Array.from(time);
    z.splice(0,11);
    z.splice(5,4);
    const w = z.join('');
    console.log(w);
    return w;
  }
  DOMSelectors.app.insertAdjacentHTML(
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
      <p>Sunrise: ${removeDate(data.timelines.daily[i].values.sunriseTime)} AM</p>
      <p>Sunset: ${removeDate(data.timelines.daily[i].values.sunsetTime)} PM</p>
    </div>`
  );
}
export { addCard };

