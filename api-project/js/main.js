import '/css/style.css'
import '/css/variables.css'
import './dom.js';
import { userInput } from "./dom.js";
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
/*         data.results.forEach((city)=> console.log(city)); */
        weatherDisplay(data);
        
    } catch (error) {
        console.log("sorry");
    }
}
getData(URL);

function weatherDisplay(data) {
    document.getElementById("app2").textContent = data.location.name;
    for (let i = 0; i < 5; i++) {
      addCard(data, i);
    }
  }


  
