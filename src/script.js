import "./style.css";
import { displayAllCities, displayCityDataToPanel } from "./Displayer.js";
import { getCityWeatherPromise } from "./Api.js";

displayAllCities();
let searchedCity = "";

const searchCityInput = document.querySelector(".search-city-input");

searchCityInput.addEventListener("change", (e) => {
  e.preventDefault();
  searchedCity = e.target.value;
  console.log(searchedCity);
  let weatherObject = getCityWeatherPromise(searchedCity).catch((err) => {
    console.log(err);
  });
  displayCityDataToPanel(weatherObject);
});
