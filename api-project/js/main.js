import '/css/style.css'
import '/css/variables.css'
import './dom.js';
import { addCard } from "./dom.js";


const URL =`https://api.tomorrow.io/v4/weather/forecast?location=Staten Island&timesteps=1d&units=imperial&apikey=lrztIeax2sMJHKdeFeL2ej9MZFLJFRHx`;

async function getData(URL) {
    try {
        const response = await fetch(URL);
        if (response.status !=200){
            throw new Error(response.statusText)
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
      if (searchResponse.status !=200) {
        throw new Error(searchResponse.statusText);
      }
      const searchData = await searchResponse.json();
      console.log(searchData);
      searchWeatherDisplay(searchData);
    } catch (error) {
      console.log('Sorry. I could not find the city you searched for. Check your spelling.');
    }
  }
export { searchWeatherByCity };

function weatherDisplay(data) {
    document.getElementById("app2").textContent = data.location.name;
    for (let i = 0; i < 5; i++) {
      addCard(data, i);
    }
  }
  function searchWeatherDisplay(searchData) {
    document.getElementById("app2").textContent = searchData.location.name;
    document.getElementById("forecast").innerHTML = '';
    for (let i = 0; i < 5; i++) {
        addCard(searchData, i);
    }
  }
  
