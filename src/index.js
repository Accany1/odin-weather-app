import "./styles.css";

async function Weather() {
    const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/singapore?unitGroup=metric&include=current&key=4776LACF5YLTJYS6JKTPBCHG9&contentType=json")
    const json = await response.json()
    console.log(json)
}

Weather()