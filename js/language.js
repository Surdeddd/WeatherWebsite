const languageSwitch = document.getElementById("languageSwitch");
const switchLabel = document.querySelector(".toggle-label");
const containerName = document.querySelector(".containerName");
const searchBar = document.querySelector("#searchBar");
const showButton = document.querySelector(".btn");

languageSwitch.addEventListener("change", function () {
  if (this.checked) {
    updateLanguageTexts("en");
  } else {
    updateLanguageTexts("ru");
  }
});

function updateLanguageTexts(language) {
  if (language === "en") {
    containerName.textContent = "Weather Forecast";
    searchBar.setAttribute("placeholder", "enter a city");
    showButton.textContent = "Show";
    removeButton.textContent = "Remove";
    switchLabel.textContent = "ENG / RUS";
    document.querySelectorAll(".info").forEach((info) => {
      if (info.id === "feelslike") {
        info.textContent = `Feels like ${currentData.current.feelslike_c}°C`;
      } else if (info.id === "averageChance") {
        info.textContent = `Chance of precipitation: ${averageChance.toFixed(
          1
        )}%`;
      } else if (info.id === "precip_mm") {
        info.textContent = `Precipitation: ${currentData.current.precip_mm} mm`;
      } else if (info.id === "wind") {
        info.textContent = `Wind speed: ${currentData.current.wind_kph} km/h`;
      } else if (info.id === "Pressure") {
        info.textContent = `Pressure: ${Pressuremb.toFixed(1)} mmHg`;
      } else if (info.id === "humidity") {
        info.textContent = `Humidity: ${currentData.current.humidity}%`;
      }
    });
  } else if (language === "ru") {
    containerName.textContent = "Прогноз погоды";
    searchBar.setAttribute("placeholder", "введите город");
    showButton.textContent = "показать";
    removeButton.textContent = "удалить";
    switchLabel.textContent = "RUS / ENG";
    document.querySelectorAll(".info").forEach((info) => {
      if (info.id === "feelslike") {
        info.textContent = `Ощущается как ${currentData.current.feelslike_c}°C`;
      } else if (info.id === "averageChance") {
        info.textContent = `Вероятность осадков: ${averageChance.toFixed(1)}%`;
      } else if (info.id === "precip_mm") {
        info.textContent = `Осадки: ${currentData.current.precip_mm} мм`;
      } else if (info.id === "wind") {
        info.textContent = `Скорость ветра: ${currentData.current.wind_kph} км/ч`;
      } else if (info.id === "Pressure") {
        info.textContent = `Давление: ${Pressuremb.toFixed(1)} мм.рт.ст.`;
      } else if (info.id === "humidity") {
        info.textContent = `Влажность воздуха: ${currentData.current.humidity}%`;
      }
    });
  }
}

updateLanguageTexts("ru");
