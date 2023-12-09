async function getWeather() {
    const cityInput = document.getElementById('city');
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const weatherInfo = document.querySelector('.weather-info');

    const apiKey = 'e48b511c7053dfdd09193dda6eab92c9'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Failed to fetch weather data. Status: ${response.status}`);
        }

        const data = await response.json();

        if (!data.main || !data.main.temp || !data.weather || !data.weather[0].description) {
            throw new Error('Unexpected API response format');
        }

        console.log('API Response:', data);

        cityName.textContent = data.name;
        temperature.textContent = `Temperature: ${data.main.temp} °C`;
        description.textContent = `Description: ${data.weather[0].description}`;

        weatherInfo.style.display = 'block';
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Error fetching weather data. Please try again.');
    }
}
