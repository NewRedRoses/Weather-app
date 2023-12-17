// To be removed eventually
const listOfCities = ["Newark", "Trenton", "Jersey City", "Hoboken", "NYC"];

function displayAllCities() {
  const citiesContainer = document.querySelector(".list-of-cities");
  listOfCities.forEach((city) => {
    const cityContainter = document.createElement("li");
    cityContainter.textContent = city;
    citiesContainer.appendChild(cityContainter);
  });
}
async function displayCityDataToPanel(weatherResponse) {
  try {
    let weatherData = await weatherResponse;
    displayLocationData(weatherData);
    displayCurrentWeatherData(weatherData);
    displayForecastWeatherData(weatherData);
  } catch (error) {
    console.log(error);
  }
}
function displayLocationData(weatherData) {
  const cityNameContainer = document.querySelector(".city-name");
  cityNameContainer.textContent = weatherData.location.name + ",";

  const cityRegionContainer = document.querySelector(".city-region");
  cityRegionContainer.textContent = weatherData.location.region;

  const cityCountryContainer = document.querySelector(".city-country");
  cityCountryContainer.textContent = weatherData.location.country;
}
function displayCurrentWeatherData(weatherData) {
  const cityConditionContainer = document.querySelector(".city-condition");
  cityConditionContainer.textContent = weatherData.current.condition.text;

  const cityTempFContainer = document.querySelector(".city-temp_f");
  // add option for celcius as well
  cityTempFContainer.textContent = weatherData.current.temp_f + "°";
}

function displayForecastWeatherData(weatherData) {
  // Dereferencing the data
  const weatherDataToday = weatherData.forecast.forecastday[0];
  const astroDataToday = weatherDataToday.astro;

  // Sunrise
  const todaySunriseTitle = document.querySelector(".sunrise-title");
  todaySunriseTitle.textContent = "Sunrise" + ": ";
  const todaySunriseValue = document.querySelector(".sunrise-value");
  todaySunriseValue.textContent = astroDataToday.sunrise;
  // Sunset
  const todaySunsetTitle = document.querySelector(".sunset-title");
  todaySunsetTitle.textContent = "Sunset" + ": ";
  const todaySunsetValue = document.querySelector(".sunset-value");
  todaySunsetValue.textContent = astroDataToday.sunset;
}
export { displayAllCities, displayCityDataToPanel };
