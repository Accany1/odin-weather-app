import "./styles.css";

const address = document.querySelector(".address")
const weatherDiv = document.querySelector(".weather")
const temp = document.querySelector(".temp")    
const wind = document.querySelector(".wind")

const submit = document.querySelector("button")
const loader = document.querySelector(".loader")

const handleSubmit = (e) => {
    const input = document.querySelector(".address-input")
    e.preventDefault()
    Weather(input.value)
}

submit.addEventListener("click", handleSubmit)

async function Weather(input) {
    loader.style.display = "block"
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?unitGroup=metric&include=current&key=4776LACF5YLTJYS6JKTPBCHG9&contentType=json`)
        const json = await response.json()
        console.log(json)
        const weather = ProcessJson(json)
        console.log(weather)
        address.style.color = "#e0e1dd"
        address.textContent = weather.address
        weatherDiv.textContent = weather.weather
        temp.textContent = weather.temp + " °C"
        wind.textContent = weather.wind + " mph"
    } catch (error) {
        address.textContent = "Error. No such location found"
        address.style.color = "red"
        temp.textContent = ""
        wind.textContent = ""
        weatherDiv.textContent = ""
    }
    loader.style.display = "none"
}

const ProcessJson = (json) => {
    const address = json.resolvedAddress
    const weather = json.currentConditions.conditions
    const temp = json.currentConditions.temp
    const wind = json.currentConditions.windspeed
    return { address, weather, temp, wind }
}

Weather("Singapore")