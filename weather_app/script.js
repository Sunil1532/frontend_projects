const apiKey = "c08af7e80a3eed128ce170718a969537";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherIcon = document.getElementById("weatherIcon");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const humidityData = document.getElementById("humidityData");
const windData = document.getElementById("windData");
const weatherCondition = document.getElementById("weatherCondition");
const errorMessage = document.getElementById("errorMessage");

function checkWeather(city) {
    axios.get(`${apiUrl}${city}&appid=${apiKey}`)
        .then(response => {
            const data = response.data;
            cityName.innerHTML = data.name;
            temperature.innerHTML = `${Math.round(data.main.temp)}°C`;
            humidityData.innerHTML = `${data.main.humidity}%`;
            windData.innerHTML = `${data.wind.speed} km/h`;
            weatherCondition.innerHTML = data.weather[0].main;

            // Set Weather Icon
            const weatherMain = data.weather[0].main.toLowerCase();
            let iconSrc = "images/default.png";

            if (weatherMain.includes("cloud")) iconSrc = "images/clouds.png";
            else if (weatherMain.includes("rain")) iconSrc = "images/rain.png";
            else if (weatherMain.includes("drizzle")) iconSrc = "images/drizzle.png";
            else if (weatherMain.includes("mist")) iconSrc = "images/mist.png";
            else if (weatherMain.includes("clear")) iconSrc = "images/clear.png";

            weatherIcon.src = iconSrc;
            errorMessage.style.display = "none"; // Hide error message
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            errorMessage.style.display = "block"; // Show error message
            cityName.innerHTML = "";
            temperature.innerHTML = "";
            humidityData.innerHTML = "";
            windData.innerHTML = "";
            weatherCondition.innerHTML = "";
            weatherIcon.src = ""; // Reset icon
        });
}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city) {
        checkWeather(city);
    }
});
