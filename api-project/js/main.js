import "/css/style.css";
import "/css/variables.css";
import "./dom.js";

const URL =
  "https://api.tomorrow.io/v4/weather/forecast?location=London&timesteps=1d&units=metric&apikey=lrztIeax2sMJHKdeFeL2ej9MZFLJFRHx";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status != 200) {
      let pokemon = "peekachew";
      throw new Error(pokemon);
    }
    console.log(response);
    const data = await response.json();
    console.log(data);
    /*         data.results.forEach((city)=> console.log(city)); */
    DOMSelectors.constantCard.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
<h2>${DOMSelectors.location.name}</h2>
</div>`
    );
  } catch (error) {
    console.log("sorry");
  }
}
getData(URL);
