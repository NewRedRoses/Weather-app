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
const locationPropsToUse = ["name", "country"];
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
function createDivWithClassName(className) {
  const desiredDiv = document.createElement("div");
  desiredDiv.classList.add(className);
}

function displayDataToQuery(apiResponse, objectToUse, propToUse, queryClass) {
  const container = document.querySelector("." + queryClass);
  container.textContent = apiResponse[objectToUse][propToUse];
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

export { displayAllCities, displayCityDataToPanel };
