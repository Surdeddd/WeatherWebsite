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
  currentLanguage = language;
  if (language === "en") {
    containerName.textContent = "Weather Forecast";
    searchBar.setAttribute("placeholder", "enter a city");
    showButton.textContent = "Show";
    removeButton.textContent = "Remove";
    switchLabel.textContent = "ENG / RUS";
    document.querySelectorAll("span").forEach((TemperatureMinMax) => {
      if (TemperatureMinMax.id === "max") {
        TemperatureMinMax.textContent = `Max:`;
      } else if (TemperatureMinMax.id === "min") {
        TemperatureMinMax.textContent = `Min:`;
      }
    });
    document.querySelectorAll("span").forEach((info) => {
      if (info.id === "feel") {
        info.textContent = `Feels like: `;
      } else if (info.id === "averageChance") {
        info.textContent = `Chance of precipitation:`;
      } else if (info.id === "precip_mm") {
        info.textContent = `Precipitation:`;
      } else if (info.id === "precip_mmm") {
        info.textContent = `mm`;
      } else if (info.id === "wind") {
        info.textContent = `Wind speed: `;
      } else if (info.id === "windm") {
        info.textContent = `km/h`;
      } else if (info.id === "Pressure") {
        info.textContent = `Pressure:`;
      } else if (info.id === "Pressuremm") {
        info.textContent = `mmHg`;
      } else if (info.id === "humidity") {
        info.textContent = `Humidity:`;
      }
    });
  } else if (language === "ru") {
    containerName.textContent = "Прогноз погоды";
    searchBar.setAttribute("placeholder", "введите город");
    showButton.textContent = "показать";
    removeButton.textContent = "удалить";
    switchLabel.textContent = "RUS / ENG";
    document.querySelectorAll("span").forEach((TemperatureMinMax) => {
      if (TemperatureMinMax.id === "max") {
        TemperatureMinMax.textContent = `Макс.:`;
      } else if (TemperatureMinMax.id === "min") {
        TemperatureMinMax.textContent = `Мин.:`;
      }
    });
    document.querySelectorAll("span").forEach((info) => {
      if (info.id === "feel") {
        info.textContent = `Ощущается как:`;
      } else if (info.id === "averageChance") {
        info.textContent = `Вероятность осадков:`;
      } else if (info.id === "precip_mm") {
        info.textContent = `Осадки:`;
      } else if (info.id === "precip_mmm") {
        info.textContent = `мм`;
      } else if (info.id === "wind") {
        info.textContent = `Скорость ветра:`;
      } else if (info.id === "windm") {
        info.textContent = `км/ч`;
      } else if (info.id === "Pressure") {
        info.textContent = `Давление:`;
      } else if (info.id === "Pressuremm") {
        info.textContent = ` мм.рт.ст.`;
      } else if (info.id === "humidity") {
        info.textContent = `Влажность воздуха:`;
      }
    });
  }
}

updateLanguageTexts("ru");
