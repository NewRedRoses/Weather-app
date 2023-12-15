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
    console.log(weatherData);
    displayLocationData(weatherData);
    displayWeatherData(weatherData);
    displayExtraData(weatherData);
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
function displayWeatherData(weatherData) {
  const conditionIcon = document.createElement("img");
  //conditionIcon.setAttribute("src",  weatherData.current.condition.icon;)

  const cityConditionContainer = document.querySelector(".city-condition");
  cityConditionContainer.textContent = weatherData.current.condition.text;

  const cityNameContainer = document.querySelector(".city-temperature");
  // add option for celcius as well
  cityNameContainer.textContent = weatherData.current.temp_f + "°";
}
function displayExtraData(weatherData) {
  const propsToUse = ["humidity", "precip_in", "vis_miles"];
}

export { displayAllCities, displayCityDataToPanel };
