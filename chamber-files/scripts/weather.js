


// Grab the current number in the .temp span. (As a Int)
var temp = parseInt(document.querySelector('.temp').textContent);
console.log("Temperature: " + temp);

// Grab the current wind speed. (As a float)
var windspeed = parseFloat(document.querySelector('.wind-speed span').textContent);
console.log("Wind Speed: " + windspeed);

// 



var chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
console.log("Chill Factor: " + chill);

// If the temp is equal to or above 50m degrees and wind speed is higher than 3, do something
if ((temp <= 50) && (windspeed > 3.0))
{
    document.querySelector(".wind-chill").textContent = chill;
    
}
else 
{
    document.querySelector(".wind-chill").textContent = "N/A";
    // console.log("Wind Chill: N/A")
}

