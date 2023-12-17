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
  const hourlyForecastToday = weatherDataToday.hour;
  console.log(hourlyForecastToday);

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
  displayHourlyForecast(hourlyForecastToday, 6);
}
function createHourForecast(currentHour, parentContainer, condition, temp_f) {
  // time -> condition -> temperature
  const hourForecastContainer = document.createElement("div");
  hourForecastContainer.classList.add("forecast-hour");
  hourForecastContainer.classList.add(`hour-${currentHour}`);

  const hourTitle = document.createElement("div");
  hourTitle.textContent = currentHour;
  hourTitle.classList.add("hour-value");
  hourForecastContainer.appendChild(hourTitle);

  const hourCondition = document.createElement("div");
  hourCondition.textContent = condition;
  hourCondition.classList.add("hour-condition");
  hourForecastContainer.appendChild(hourCondition);

  const hourTemp = document.createElement("div");
  hourTemp.textContent = temp_f + "°";
  hourTemp.classList.add("hour-tempf");
  hourForecastContainer.appendChild(hourTemp);

  parentContainer.appendChild(hourForecastContainer);
}
function displayHourlyForecast(forecastData, numOfHoursToShow) {
  const parentContainer = document.querySelector(
    ".city-hourly-forecast-container",
  );
  const d = new Date();
  const irlHour = d.getHours();
  const maxHoursToShow = irlHour + numOfHoursToShow;
  for (let hour = irlHour; hour < maxHoursToShow; hour++) {
    const currentHour = forecastData[hour];
    console.log(hour);
    createHourForecast(
      hour,
      parentContainer,
      currentHour.condition.text,
      currentHour.temp_f,
    );
  }
}
export { displayAllCities, displayCityDataToPanel };
