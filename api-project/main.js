import './style.css'

const URL ='http://dataservice.accuweather.com/currentconditions/v1/329260?apikey=BTM7UO03eyvKCMa6t4LeborVIvQK2lyT&language=en-us&details=false';

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
        document.querySelector("h1").textContent = data.temperature;
    } catch (error) {
        console.log("sorry");
    }
}
getData(URL);
