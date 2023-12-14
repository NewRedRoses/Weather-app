async function getCityWeather(cityName) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=92a70ec39e5e421380c180722230412&q=${cityName}&aqi=no`,
    { mode: "cors" },
  );
  const cityWeatherData = await response.json();
  return cityWeatherData;
}
export { getCityWeather };
