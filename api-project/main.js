import './style.css'

const URL ='http://dataservice.accuweather.com/currentconditions/v1/14-349727_1_AL?apikey=%09BTM7UO03eyvKCMa6t4LeborVIvQK2lyT&language=en-us&details=true';

async function getData(URL) {
    try {
        const response = await fetch(URL);
        if (response.status !=200){
            let pokemon = "peekachew";
            throw new Error(pokemon);
        }
        console.log(response);
        const data = await response.json();
        console.log(data);
/*         data.results.forEach((city)=> console.log(city)); */
        /* document.querySelector("h1").textContent = data.temperature; */
    } catch (error) {
        console.log("sorry");
    }
}
getData(URL);
