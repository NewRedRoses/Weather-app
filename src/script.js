import "./style.css";
import { displayCityDataToPanel } from "./Displayer.js";
import { getCityWeatherForecastPromise } from "./Api.js";

//displayAllCities();
let searchedCity = "";

const searchCityInput = document.querySelector(".search-city-input");

searchCityInput.addEventListener("change", (e) => {
  e.preventDefault();
  searchedCity = e.target.value;
  // console.log(searchedCity);
  let weatherObject = getCityWeatherForecastPromise(searchedCity).catch(
    (error) => {
      console.log(error);
    },
  );
  displayCityDataToPanel(weatherObject);
});
