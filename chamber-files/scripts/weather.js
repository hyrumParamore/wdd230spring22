const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5731397&appid=8e9a7c0e67ebe79cf3c92647561a43c0";

const getWeather = async () => {
    const response = await fetch(apiURL);
    jsObject = await response.json();
    console.log(jsObject);

    
    // TEMP
    let temp = (jsObject.main.temp - 273.15) * 1.8 + 32;
    document.querySelector('.temp').textContent = temp.toFixed(2);
    console.log("Temperature: " + temp.toFixed(2));
    // let temp = 45;

    // WINDSPEED
    let windspeed = jsObject.wind.speed;
    console.log("Windspeed: " + windspeed);
    document.querySelector('.wind-speed span').textContent = windspeed + " ";
    // let windspeed = 5;

    // WINDCHILL
    var chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
    console.log("Chill Factor: " + chill);

    if ((temp <= 50) && (windspeed > 3.0))
    {
        document.querySelector(".wind-chill").textContent = chill;
        
    }
    else 
    {
        document.querySelector(".wind-chill").textContent = "N/A";
        console.log("Wind Chill: N/A");
    }


    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;

    document.querySelector('.weather-icon').textContent = iconsrc;
    document.querySelector('.weather-icon').setAttribute('src', iconsrc);
    document.querySelector('.weather-icon').setAttribute('alt', desc);
    document.querySelector('.figcaption').textContent = desc;

};

getWeather();


