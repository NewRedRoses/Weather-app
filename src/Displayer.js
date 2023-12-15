const listOfCities = ["Newark", "Trenton", "Jersey City", "Hoboken", "NYC"];

function displayAllCities() {
  const citiesContainer = document.querySelector(".list-of-cities");
  listOfCities.forEach((city) => {
    const cityContainter = document.createElement("li");
    cityContainter.textContent = city;
    citiesContainer.appendChild(cityContainter);
  });
}
async function displayWeatherDataToPanel(weatherResponse) {
  let weatherData = await weatherResponse;

  const cityNameContainer = document.querySelector(".city-name");
  cityNameContainer.textContent = weatherData.location.name;

  const cityRegionContainer = document.querySelector(".city-region");
  cityRegionContainer.textContent = weatherData.location.region;

  const cityCountryContainer = document.querySelector(".city-country");
  cityCountryContainer.textContent = weatherData.location.country;
}

export { displayAllCities, displayWeatherDataToPanel };
