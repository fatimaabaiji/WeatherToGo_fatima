/**
 * API Key
 * for the Met Office API
 */
function getAPIKey() {
    // return `eyJ4NXQjUzI1NiI6Ik5XVTVZakUxTkRjeVl6a3hZbUl4TkdSaFpqSmpOV1l6T1dGaE9XWXpNMk0yTWpRek5USm1OVEE0TXpOaU9EaG1NVFJqWVdNellXUm1ZalUyTTJJeVpBPT0iLCJraWQiOiJnYXRld2F5X2NlcnRpZmljYXRlX2FsaWFzIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ==.eyJzdWIiOiJtb2d0aGVtb3NxdWl0b0BnbWFpbC5jb21AY2FyYm9uLnN1cGVyIiwiYXBwbGljYXRpb24iOnsib3duZXIiOiJtb2d0aGVtb3NxdWl0b0BnbWFpbC5jb20iLCJ0aWVyUXVvdGFUeXBlIjpudWxsLCJ0aWVyIjoiVW5saW1pdGVkIiwibmFtZSI6InNpdGVfc3BlY2lmaWMtMDViNTQ1ODAtYWYwZS00ZmJjLWI1ZjMtMmE5ZmViOWVlYjdjIiwiaWQiOjkzMzEsInV1aWQiOiI1NDgxMTc1Mi01NjlkLTQ4MWMtODU2Ny1iYTVhN2RlZGIzMzIifSwiaXNzIjoiaHR0cHM6XC9cL2FwaS1tYW5hZ2VyLmFwaS1tYW5hZ2VtZW50Lm1ldG9mZmljZS5jbG91ZDo0NDNcL29hdXRoMlwvdG9rZW4iLCJ0aWVySW5mbyI6eyJ3ZGhfc2l0ZV9zcGVjaWZpY19mcmVlIjp7InRpZXJRdW90YVR5cGUiOiJyZXF1ZXN0Q291bnQiLCJncmFwaFFMTWF4Q29tcGxleGl0eSI6MCwiZ3JhcGhRTE1heERlcHRoIjowLCJzdG9wT25RdW90YVJlYWNoIjp0cnVlLCJzcGlrZUFycmVzdExpbWl0IjowLCJzcGlrZUFycmVzdFVuaXQiOiJzZWMifX0sImtleXR5cGUiOiJQUk9EVUNUSU9OIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiU2l0ZVNwZWNpZmljRm9yZWNhc3QiLCJjb250ZXh0IjoiXC9zaXRlc3BlY2lmaWNcL3YwIiwicHVibGlzaGVyIjoiSmFndWFyX0NJIiwidmVyc2lvbiI6InYwIiwic3Vic2NyaXB0aW9uVGllciI6IndkaF9zaXRlX3NwZWNpZmljX2ZyZWUifV0sInRva2VuX3R5cGUiOiJhcGlLZXkiLCJpYXQiOjE3Mzg2NjU1MTksImp0aSI6IjlmMDQ2MWJiLWFmODctNDc3MC1hYzRhLTMxN2RiODE1NjQxYyJ9.AEFlnjZrvfSlDBzGF90mZb5hH9yXQ-RLkNKBzOOJOs-tKJctS05iLIgL0SjlohsskiYhLphVG4tZ4qgqnR2X97mGjXjtzYALoaDQYI1IBXBN9MEAIdoqhPAMghzlkgOSzjyc7_NpB8pALsqOzHVdediOr4TVmQv04lEfwpPs8Lp2ALByGadWDzSBBzN-qLktCjRS0H-oHDCC2qHoKTF-p3svvyvah9hCWTG-HaWK1JcsEpAPIqD-uu2KtOxkSUq097WPKpNno1dybsISx6uBZSVeP7ejP0sH16omqk03fPHAgNv9aE5buhmTkCQDO46X-VBk_zmF9BNtqTbNUkes3g==`;
    return `eyJ4NXQjUzI1NiI6Ik5XVTVZakUxTkRjeVl6a3hZbUl4TkdSaFpqSmpOV1l6T1dGaE9XWXpNMk0yTWpRek5USm1OVEE0TXpOaU9EaG1NVFJqWVdNellXUm1ZalUyTTJJeVpBPT0iLCJraWQiOiJnYXRld2F5X2NlcnRpZmljYXRlX2FsaWFzIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ==.eyJzdWIiOiJ6NGQxNTkyZ0BzdHVkZW50cy5jb2RlaW5zdGl0dXRlLm5ldEBjYXJib24uc3VwZXIiLCJhcHBsaWNhdGlvbiI6eyJvd25lciI6Ino0ZDE1OTJnQHN0dWRlbnRzLmNvZGVpbnN0aXR1dGUubmV0IiwidGllclF1b3RhVHlwZSI6bnVsbCwidGllciI6IlVubGltaXRlZCIsIm5hbWUiOiJzaXRlX3NwZWNpZmljLTlmYTI0MWZhLTM0NDgtNGZlZi1iNDNjLWEwNWIwMDlhNWUwMiIsImlkIjo5MzY1LCJ1dWlkIjoiNjU4MzNkNGEtNTk3Yi00OWE1LTk5M2YtOWE1YTg0MGVkMDIzIn0sImlzcyI6Imh0dHBzOlwvXC9hcGktbWFuYWdlci5hcGktbWFuYWdlbWVudC5tZXRvZmZpY2UuY2xvdWQ6NDQzXC9vYXV0aDJcL3Rva2VuIiwidGllckluZm8iOnsid2RoX3NpdGVfc3BlY2lmaWNfZnJlZSI6eyJ0aWVyUXVvdGFUeXBlIjoicmVxdWVzdENvdW50IiwiZ3JhcGhRTE1heENvbXBsZXhpdHkiOjAsImdyYXBoUUxNYXhEZXB0aCI6MCwic3RvcE9uUXVvdGFSZWFjaCI6dHJ1ZSwic3Bpa2VBcnJlc3RMaW1pdCI6MCwic3Bpa2VBcnJlc3RVbml0Ijoic2VjIn19LCJrZXl0eXBlIjoiUFJPRFVDVElPTiIsInN1YnNjcmliZWRBUElzIjpbeyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6IlNpdGVTcGVjaWZpY0ZvcmVjYXN0IiwiY29udGV4dCI6Ilwvc2l0ZXNwZWNpZmljXC92MCIsInB1Ymxpc2hlciI6IkphZ3Vhcl9DSSIsInZlcnNpb24iOiJ2MCIsInN1YnNjcmlwdGlvblRpZXIiOiJ3ZGhfc2l0ZV9zcGVjaWZpY19mcmVlIn1dLCJ0b2tlbl90eXBlIjoiYXBpS2V5IiwiaWF0IjoxNzM4NzU0MTIxLCJqdGkiOiJiZDc0NTNhNC1kYWFiLTQxM2EtOWVkMi1mOWZhMzc2MDBlZmIifQ==.VtadWMvaTxSBp55FKJDaX56Qz9jU9AofwaBA0-SfY7Z0mSqi1wNOonBGDH4y2ZucJMjp_kgwZEMR19P60Su8EaaSWbQque-3pARI2fgkrFcF99LJRj0OqwgU2B4G-U1xuEkqWIh7f0ZlFB-G1hiPg9-zzbdTvWLxyZkZy-77iPSFxbgn4aTNG8hKatdpXLRnVm9b___M1PpkXn25MDxey8_VKb4sTtXQ2VKv14DjNENRvr2_3HFape_qeTXFrSrzBT_N-pY2ecB7TQ_giDSdLZV0KePo_XNhWYD7KvKMCciRPri1UtEhnlXOPTqkcgw_pbXDF0gvSLBvDcZZkWTVLw==`;
}

/**
 * Geolocation API
 * utilises w3schools code
 */
function getCurrentLocation() {
    let currentLocationObj = {};
    if (navigator.geolocation) {
        // loadingScreen();
        navigator.geolocation.getCurrentPosition(usePosition, showError);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

/**
 * Geolocation functionality
 * uses location to get the town name and set the weather data
 */
function usePosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    console.log("Latitude: " + latitude + " Longitude: " + longitude);
    getTownName(latitude, longitude);

    //WARNING/IMPORTANT: limited API uses, un-comment when ready to deploy/use
    updateWeatherHour("London", { "long": longitude, "lat": latitude });
}

/**
 * Geolocation API Error handling
 */
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
    }
}

/**
 * Geonames API
 * reverse geocoding to get the town name from the latitude and longitude
 */
function getTownName(lat, long) {
    const url = `http://api.geonames.org/findNearbyPlaceName`;
    const username = `moglin`;

    //fetch written by AI
    fetch(`${url}?lat=${lat}&lng=${long}&username=${username}`, {
        method: 'GET',
        headers: {
            'accept': 'application/json',
        }
    })
        .then(response => response.json())
        .then(data => {
            // Process town name here
            setGPSLocation(data.geonames[0].name);
        })
        .catch(error => {
            console.error('Error fetching town name:', error);
        });
}

/**
 * GPS Location text
 * sets the town name to HTML text
 */
function setGPSLocation(townName) {
    document.getElementById('GPSLocation').innerText = townName;
}

/**
 * Weather times object
 * strips the object down to an array of weather times
 */
function getAllWeatherTimes(weatherData) {
    return weatherData.features[0].properties.timeSeries;
}

/**
 * Weather hour object
 * strips the array of objects down to a single weather hour object
 */
function getOneWeatherHour(dateTime, weatherData) {
    for (let weatherHour of weatherData) {
        if (weatherHour.time === dateTime) {
            return weatherHour;
        }
    }

    //error handling return here.
}

/**
 * Update HTML with one hour weather data
 * passes through the town name and optional longitude and latitude object to set the HTML
 */
function updateWeatherHour(townName, longlat = 0) {
    const weatherTime = "hourly";

    if (longlat === 0) {
        getLongLat(townName, weatherTime);
    } else {
        setWeather(weatherTime, longlat);
    }
}

/**
 * Update HTML with one day weather data
 * passes through the town name and optional longitude and latitude object to set the HTML
 */
function updateWeatherDaily(townName, longlat = 0) {
    const weatherTime = "daily";

    if (longlat === 0) {
        getLongLat(townName, weatherTime);
    } else {
        setWeather(weatherTime, longlat);
    }
}

/**
 * Longitude and Latitude API from town name
 * fetches the longitude and latitude using the town name, from the Postcodes API,
 * and passes this through to the next fetch for weather data
 */
function getLongLat(placeName, weatherTime) {
    const url = `https:api.postcodes.io/places?query=${placeName}`;
    let long = 0;
    let lat = 0;
    console.log('Fetching URL:', url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.result.length; i++) {
                if (data.result[i].local_type == "Town" || data.result[i].local_type == "City") {
                    //console.log(`Place: ${data.result[i].name_1}, Longitude: ${data.result[i].longitude}, Latitude: ${data.result[i].latitude}`);
                    long = parseFloat(data.result[i].longitude).toFixed(4);
                    lat = parseFloat(data.result[i].latitude).toFixed(4);
                    let longLatObj = { "long": long, "lat": lat };

                    // console.log(longLatObj);
                    setWeather(weatherTime, longLatObj);

                    break;
                }
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

/**
 * Met Office API
 * fetches the weather data from the Met Office API
 * sets the HTML for hourly, or daily weather data
 */
function setWeather(weatherTime, longlat) {
    const url = `https://data.hub.api.metoffice.gov.uk/sitespecific/v0/point/${weatherTime}`;
    const apikey = getAPIKey();

    //fetch written by AI
    fetch(`${url}?latitude=${longlat.lat}&longitude=${longlat.long}`, {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'apikey': apikey
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Process the weather data here
            if (weatherTime === "hourly") {
                const currentWeatherHour = getOneWeatherHour(getCurrentHourISO(), getAllWeatherTimes(data));

                setTemperatureTextArea(currentWeatherHour);
                setUVIndexTextArea(currentWeatherHour);
                setWeatherDescriptionAndIcon(currentWeatherHour);
            } else if (weatherTime === "daily") {
                const allWeatherDays = getAllWeatherTimes(data);

                setFiveDayTemperatureTextArea(allWeatherDays);
                setFiveDayWeatherDescriptionAndIcon(allWeatherDays);
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

/**
 * Current Hour in ISO format
 * gets the current time, and rounds to nearest item, ready for comparison
 */
function getCurrentHourISO() {
    const currentTime = new Date();
    let textTime = currentTime.toISOString();
    //remove 'Z'
    textTime = textTime.slice(0, 22);

    //slice the minutes
    let roundHours = Number(textTime.slice(14, 16));

    //decimalise minutes, round to nearest hour
    roundHours /= 60;
    roundHours = Math.round(roundHours);

    //add the rounded hours back in tp ISO format
    if (roundHours === 1) {
        let currentHour = Number(textTime.slice(11, 13));
        let nextHour = currentHour + 1;

        textTime = textTime.replace(currentHour, nextHour);
    }

    //add 'Z' back in to match ISO standards for successful comparison.
    textTime = textTime.slice(0, 14) + '00Z';
    return textTime;
}

/**
 * Current hour forecast section
 */
function setTemperatureTextArea(weatherHour) {
    // get the temperature from the weather object
    const temperature = Math.floor(weatherHour.screenTemperature).toString() + "°C";
    // and set that temperature to the HTML text
    document.getElementsByClassName("TemperatureTextArea")[0].innerText = temperature;
}

function setUVIndexTextArea(weatherHour) {
    let uvIndex = "";
    // get the UV index from the weather object
    switch (weatherHour.uvIndex) {
        case 1:            
            uvIndex = "UV Index right now is : Low - Burn Time 60 Minutes"
            break;
        case 2:
            uvIndex = "UV Index right now is : Low - Burn Time 60 Minutes"
            break;
        case 3:
            uvIndex = "UV Index right now is : Moderate - Burn Time 45 Minutes"
            break;
        case 4:
            uvIndex = "UV Index right now is : Moderate - Burn Time 45 Minutes"
            break;
        case 5:
            uvIndex = "UV Index right now is : Moderate - Burn Time 45 Minutes"
            break;
        case 6:
            uvIndex = "UV Index right now is : High - Burn Time 30 Minutes"
            break;
        case 7:
            uvIndex = "UV Index right now is : High - Burn Time 30 Minutes"
            break;
        case 8:
            uvIndex = "UV Index right now is : Very High - Burn Time 15-25 Minutes"
            break;
        case 9:
            uvIndex = "UV Index right now is : Very High - Burn Time 15-25 Minutes"
            break;
        case 10:
            uvIndex = "UV Index right now is : Very High - Burn Time 15-25 Minutes"
            break;
        default:
            uvIndex = "UV Index Not Found: " + weatherHour.uvIndex.toString();
            break;
    }

   // and set that UV Index to the HTML text
    document.getElementsByClassName("UVIndexTextArea")[0].innerText = uvIndex;
}

function setWeatherDescriptionAndIcon(weatherHour) {
    // get the significant weather code from the weather object
    // and do a lookup in the function to get a description and icon object
    const weatherInfo = getWeatherDescriptionAndIcon(weatherHour.significantWeatherCode);
    // finally set that description and icon object to the HTML text and image
    document.getElementById("BottomTextArea").innerText = weatherInfo.description;
    document.getElementById("MainIcon").src = weatherInfo.icon;
    document.getElementById("MainIcon").innerHTML = `<img src="${weatherInfo.icon}" alt="Weather Icon">`;
}
/**
 * Five Day Forecast section
 */
function setFiveDayTemperatureTextArea(weatherDays) {
    //loop for five days of data, exit out on sixth iteration
    //we skip the zeroith in the array, as that is yesterday's data
    let temperature = "";
    for (let i = 1; i < 6; i++) {
        // get the maximum daytime temperature from the weather object
        temperature = Math.floor(weatherDays[i].dayMaxScreenTemperature).toString() + "°C";
        // and set that temperature to the HTML text
        document.getElementsByClassName(`Day${i}Temp`)[0].innerText = temperature;
    }
}

function setFiveDayWeatherDescriptionAndIcon(weatherDays) {
    //loop for five days of data, exit out on sixth iteration
    //we skip the zeroith in the array, as that is yesterday's data
    let weatherInfo = "";
    for (let i = 1; i < 6; i++) {
        // get the significant weather code from the weather object
        // and do a lookup in the function to get a description and icon object
        weatherInfo = getWeatherDescriptionAndIcon(weatherDays[i].daySignificantWeatherCode);
        // finally set that description and icon object to the HTML text and image
        document.getElementsByClassName(`Day${i}Weather`)[0].innerText = weatherInfo.description;
        document.getElementsByClassName(`Day${i}Icon`)[0].src = weatherInfo.icon;
    }
}

/**
 * Weather Description and Icon object
 * passes through the weather code, and grabs the relevant description and icon
 * for that weather code (a lookup table)
 */
function getWeatherDescriptionAndIcon(weatherCode) {
    console.log("weatherCode" + weatherCode);
    const weatherMap = {
        0: { description: "Clear night", icon: "Assets/Images/clear_moon_night.png" },
        1: { description: "Sunny", icon: "Assets/Images/sunny.png" },
        2: { description: "Partly cloudy night", icon: "Assets/Images/cloudy_night.png" },
        3: { description: "Partly cloudy", icon: "Assets/Images/cloudy_sun" },
        5: { description: "Mist", icon: "Assets/Images/fogy.png" },
        6: { description: "Fog", icon: "Assets/Images/fogy.png" },
        7: { description: "Cloudy", icon: "Assets/Images/cloudy.png" },
        8: { description: "Overcast", icon: "Assets/Images/cloudy.png" },
        9: { description: "Light rain shower", icon: "Assets/Images/lightrainday.png" },
        10: { description: "Light rain shower", icon: "Assets/Images/lightrainnight.png" },
        11: { description: "Drizzle", icon: "Assets/Images/rain.png" },
        12: { description: "Light rain", icon: "Assets/Images/lightrainday.png" },
        13: { description: "Heavy rain shower", icon: "Assets/Images/heavyrainnight.png" },
        14: { description: "Heavy rain shower", icon: "Assets/Images/heavyrain.png" },
        15: { description: "Heavy rain", icon: "Assets/Images/windy.png" },
        16: { description: "Sleet shower", icon: "Assets/Images/sleet.png" },
        17: { description: "Sleet shower", icon: "Assets/Images/sleet.png" },
        18: { description: "Sleet", icon: "Assets/Images/sleet.png" },
        19: { description: "Hail shower", icon: "Assets/Images/hailshowernight.png" },
        20: { description: "Hail shower", icon: "Assets/Images/hailshower.png" },
        21: { description: "Hail", icon: "Assets/Images/hail.png" },
        22: { description: "Light snow shower", icon: "Assets/Images/snow.png" },
        23: { description: "Light snow shower", icon: "Assets/Images/snow.png" },
        24: { description: "Light snow", icon: "Assets/Images/snow.png.png" },
        25: { description: "Heavy snow shower", icon: "Assets/Images/snow.png" },
        26: { description: "Heavy snow shower", icon: "Assets/Images/snow.png" },
        27: { description: "Heavy snow", icon: "Assets/Images/snow.png" },
        28: { description: "Thunder shower", icon: "Assets/Images/thundershowernight.png" },
        29: { description: "Thunder shower", icon: "Assets/Images/thundershower.png" },
        30: { description: "Thunder", icon: "Assets/Images/thunder.png" }
    };
    // return the description and icon for the numeric code. If the code cannot be found, return an error handling object.
    return weatherMap[weatherCode] || { description: "Unknown", icon: "Assets/Images/unknown.png" };
}

// const text-blue-500; // Coldest
// const text-cyan-500; // Cold
// const text-sky-500; // OK
// const text-yellow-500; // Nice
// const text-orange-500; // Bit Warm
// const text-red-500; // Really Warm

/**
 * Background Temperature to Colour
 * changes the background colour depending on the temperature at the location
 */
function switchBackgroundColour(temperature) {
    if (temperature < 5) {
        document.getElementsByClassName('primarybackground').className = 'TemperatureBackgroundColourColdest';
    } else if (temperature >= 5 && temperature < 12) {
        document.getElementsByClassName('primarybackground').className = 'TemperatureBackgroundColourCold';
    } else if (temperature >= 12 && temperature < 18) {
        document.getElementsByClassName('primarybackground').className = 'TemperatureBackgroundColourOK';
    } else if (temperature >= 18 && temperature < 24) {
        document.getElementsByClassName('primarybackground').className = 'TemperatureBackgroundColourNice';
    } else if (temperature >= 24 && temperature < 30) {
        document.getElementsByClassName('primarybackground').className = 'TemperatureBackgroundColourBitWarm';
    } else if (temperature >= 30) {
        document.getElementsByClassName('primarybackground').className = 'TemperatureBackgroundColourReallyWarm';
    } else {
        document.getElementsByClassName('primarybackground').className = 'TemperatureBackgroundColourOK';
    }
}

/**
 * Loading Screen
 * displays a loading screen while geo-location is being fetched
 * takes 1-8 seconds...
 */
function loadingScreen() {
    const iconDisplayArea = document.getElementById('IconDisplayArea');
    iconDisplayArea.innerHTML = `
        <div class="IconDisplayArea bg-white p-6 rounded-lg shadow-lg">
            <h2>Loading...</h2>
            <div class="loadingbaby">
                <img src="Assets/Images/loadingbaby.jpg" alt="Loading...">
            </div>
            <div class="WeatherDescription"></div>
            <img class="WeatherIcon" src="" alt="Weather Icon">
        </div>
    `;
}

/**
 * Event listener
 * listens for location to be submitted via enter or button click
 */
const placeName = document.getElementById('placeName');
placeName.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        // get the weather data for the placename
        updateWeatherHour(placeName.value);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                // get the placename from the text box
                let userAnswer = (document.getElementById("placeName").value).toString();
                // and get the weather data for that placename
                updateWeatherHour(userAnswer);
            } else {
                // TODO: display this error message to the user
                ErrorEvent("Unknown place submitted");
            }
        });
    }
});

/**
 * Event Listener
 * toggle button is clicked to switch between GPS location and searchbar
 */
document.getElementById('toggleButton').addEventListener('click', function () {
    // TODO: when toggling back to GPS, if the gps previously failed
    // (perhaps user refused), we need to try again, otherwise use existing data to save load time
    var searchbar = document.getElementById('searchbar');
    var gpsLocation = document.getElementById('GPSlocation');
    if (searchbar.style.display === 'none') {
        searchbar.style.display = 'flex';
        gpsLocation.style.display = 'none';
    } else {
        searchbar.style.display = 'none';
        gpsLocation.style.display = 'flex';
    }
});

// Run the geolocation service, and set the weather for that location
getCurrentLocation();

// Initialize with GPS location visible and search bar hidden
document.getElementById('searchbar').style.display = 'none';
document.getElementById('GPSlocation').style.display = 'flex';
