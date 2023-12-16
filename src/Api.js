const apiKey = "92a70ec39e5e421380c180722230412";
async function getCityWeatherPromise(cityName) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`,
      { mode: "cors" },
    );
    const cityWeatherData = await response.json();
    return cityWeatherData;
  } catch (error) {
    console.log(error);
  }
}
async function getCityWeatherForecastPromise(cityName) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&=${cityName}`,
      { mode: "cors" },
    );
    const cityForecastData = await response.json();
    return cityForecastData;
  } catch (error) {
    console.log(error);
  }
}
export { getCityWeatherPromise, getCityWeatherForecastPromise };
