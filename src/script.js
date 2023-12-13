import "./style.css";

const citiesContainer = document.querySelector(".list-of-cities");
const listOfCities = ["Newark", "Trenton", "Jersey City", "Hoboken", "NYC"];
listOfCities.forEach((city) => {
  const cityContainter = document.createElement("li");
  cityContainter.textContent = city;
  citiesContainer.appendChild(cityContainter);
});
