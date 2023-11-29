async function getWeather() {
    const cityInput = document.getElementById("cityInput");
    const weatherInfo = document.getElementById("weatherInfo");

    if (cityInput.value !== "") {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=7990e398d1c5a406446dcd1a02592134&units=metric`);
            const data = await response.json();

            const temperature = data.main.temp;
            const description = data.weather[0].description;

            weatherInfo.innerHTML = `<p>Temperature: ${temperature}°C</p><p>Description: ${description}</p>`;
        } catch (error) {
            console.error("Error fetching weather data:", error);
            weatherInfo.innerHTML = "Error fetching weather data. Please try again.";
        }
    }
}
