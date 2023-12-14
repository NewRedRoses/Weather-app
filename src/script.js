import "./style.css";
import displayAllCities from "./Displayer.js";
import { getCityWeather } from "./Api.js";

displayAllCities();
let searchedCity = "";

const searchCityInput = document.querySelector(".search-city-input");

searchCityInput.addEventListener("change", (e) => {
  e.preventDefault();
  searchedCity = e.target.value;
  console.log(searchedCity);
  let test = getCityWeather(searchedCity);
  console.log(test);
});
