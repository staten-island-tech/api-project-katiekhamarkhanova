import '/css/style.css'

const URL ='https://api.tomorrow.io/v4/weather/forecast?location=new york&timesteps=1d&units=metric&apikey=lrztIeax2sMJHKdeFeL2ej9MZFLJFRHx';

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
