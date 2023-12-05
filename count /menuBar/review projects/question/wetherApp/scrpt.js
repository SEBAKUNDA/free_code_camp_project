
let city = "kigali";

const api = `https://api.weatherapi.com/v1/current.json?=8c4a3568781e47e48a8120445230210&q=${city}`;

const fetchWeather = async () => {
    try{
        const response = await fetch(api, { mode: "cors" });
        console.log(response.json());

    } catch(error){
        console.log(error);
    }
    
}
