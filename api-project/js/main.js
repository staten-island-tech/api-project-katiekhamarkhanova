import "/css/style.css";
import "/css/variables.css";
import "./dom.js";
import { addCard } from "./dom.js";
import { errorPage } from "./dom.js";

const URL = `https://api.tomorrow.io/v4/weather/forecast?location=Staten Island&timesteps=1d&units=imperial&apikey=lrztIeax2sMJHKdeFeL2ej9MZFLJFRHx`;

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status != 200) {
      throw new Error(response.statusText);
    }
    console.log(response);
    const data = await response.json();
    console.log(data);
    weatherDisplay(data);
  } catch (error) {
    console.log("Sorry, error.");
  }
}
getData(URL);

async function searchWeatherByCity(city) {
  const searchURL = `https://api.tomorrow.io/v4/weather/forecast?location=${city}&timesteps=1d&units=imperial&apikey=lrztIeax2sMJHKdeFeL2ej9MZFLJFRHx`;
  try {
    const searchResponse = await fetch(searchURL);
    if (searchResponse.status != 200) {
      errorPage();
      throw new Error(searchResponse.statusText);
    }
    const searchData = await searchResponse.json();
    console.log(searchData);
    searchWeatherDisplay(searchData);
  } catch (error) {}
}
export { searchWeatherByCity };

function weatherDisplay(data) {
  document.getElementById("locationName").textContent = data.location.name;
  for (let i = 0; i < 5; i++) {
    addCard(data, i);
  }
}
function searchWeatherDisplay(searchData) {
  document.getElementById("forecast").innerHTML = "";
  document.getElementById("locationName").textContent =
    searchData.location.name;
  document.getElementById("weatherForecastTitle").textContent =
    "5 DAY WEATHER FORECAST";
  for (let i = 0; i < 5; i++) {
    addCard(searchData, i);
  }
}
document.getElementById("imperial-btn").addEventListener("click", async () => {
  const imperialURL = `https://api.tomorrow.io/v4/weather/forecast?location=Staten Island&timesteps=1d&units=imperial&apikey=lrztIeax2sMJHKdeFeL2ej9MZFLJFRHx`;
  document.getElementById("forecast").innerHTML = "";
  await getData(imperialURL);
  updateTemperatureDisplay("°C", "°F");
  updateTemperatureDisplay("kilometres", "miles");
  updateTemperatureDisplay("kmph", "mph");
});

document.getElementById("metric-btn").addEventListener("click", async () => {
  const metricURL = `https://api.tomorrow.io/v4/weather/forecast?location=Staten Island&timesteps=1d&units=metric&apikey=lrztIeax2sMJHKdeFeL2ej9MZFLJFRHx`;
  document.getElementById("forecast").innerHTML = "";
  await getData(metricURL);
  updateTemperatureDisplay("°F", "°C");
  updateTemperatureDisplay("miles", "kilometres");
  updateTemperatureDisplay("mph", "kmph");
});



function updateTemperatureDisplay(fromUnit, toUnit) {
  const temperatureElements = document.querySelectorAll("p"); // Assuming temperature values are in h3 elements
  temperatureElements.forEach((element) => {
    if (element.textContent.includes(fromUnit)) {
      element.textContent = element.textContent.replace(fromUnit, toUnit);
    }
  });
}
