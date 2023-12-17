import "./style.css";
import { displayCityDataToPanel } from "./Displayer.js";
import { getCityWeatherForecastPromise } from "./Api.js";

//displayAllCities();
let searchedCity = "";

const searchCityInput = document.querySelector(".search-city-input");
const hourlyForecastDataContainer = document.querySelector(
  ".city-hourly-forecast-container",
);

searchCityInput.addEventListener("change", (e) => {
  e.preventDefault();
  searchedCity = e.target.value;
  // Works ok for now, don't like the second delay after typing city name.
  hourlyForecastDataContainer.innerHTML = "";
  // console.log(searchedCity);
  let weatherObject = getCityWeatherForecastPromise(searchedCity).catch(
    (error) => {
      console.log(error);
    },
  );
  displayCityDataToPanel(weatherObject);
});
