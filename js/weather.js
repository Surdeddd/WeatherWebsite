const apiKey = "57ab6615af1648e2b5b152314230108";
const form = document.querySelector("#search");
const input = document.querySelector("#searchBar");
const swiperWrapper = document.querySelector(".swiper-wrapper");
let cities = [];
form.onsubmit = function (e) {
  e.preventDefault();
  let city = input.value.trim();
  const currentUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  const forecastUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${encodeURIComponent(
    city
  )}`;

  Promise.all([
    fetch(currentUrl).then((response) => response.json()),
    fetch(forecastUrl).then((response) => response.json()),
  ]).then(([currentData, forecastData]) => {
    console.log(currentData);
    console.log(forecastData);
    const chanceOfRainArray = forecastData.forecast.forecastday[0].hour.map(
      (hour) => hour.chance_of_rain
    );
    const totalChanceSum = chanceOfRainArray.reduce(
      (sum, value) => sum + value,
      0
    );
    const averageChance = totalChanceSum / chanceOfRainArray.length;
    let Pressuremb = currentData.current.pressure_mb * 0.75006375541921;
    const htmlCode = `  
      <div class="swiper-slide card">
  <div class="location">
    <div class="city">${currentData.location.name}</div>
    <div class="country">${currentData.location.country}</div>
  </div>
  <div class="infoWeather">
    <img src="${currentData.current.condition.icon}" />
    <div class="Temperature">
      ${currentData.current.temp_c}℃
      <div class="TemperatureMinMax">
        <div id="max">Макс.:${
          forecastData.forecast.forecastday[0].day.maxtemp_c
        }℃</div>
        <div id="min">Мин.:${
          forecastData.forecast.forecastday[0].day.mintemp_c
        }℃</div>
      </div>
    </div>
  </div>
  <div class="info" id="feelslike">ощущается как ${
    currentData.current.feelslike_c
  }℃</div>
  <div class="info-container">
    <div class="info" id="averageChance">Вероятность осадков: ${averageChance.toFixed(
      1
    )}%</div>
    <div class="info" id="precip_mm">Осадки: ${
      currentData.current.precip_mm
    } мм</div>
    <div class="info" id="wind">Скорость ветра: ${
      currentData.current.wind_kph
    } км/ч</div>
    <div class="info" id="Pressure">Давление: ${Pressuremb.toFixed(
      1
    )}мм.рт.ст.</div>
    <div class="info" id="humidity">Влажность воздуха: ${
      currentData.current.humidity
    }%</div>
  </div>
  <div class="containerWeatherHours">
    <div class="weatherHours">
      <div>00:00</div>
      <img src="${
        forecastData.forecast.forecastday[0].hour[0].condition.icon
      }" />
      <div>${forecastData.forecast.forecastday[0].hour[0].temp_c}℃</div>
    </div>
    <div class="weatherHours">
      <div class>01:00</div>
      <img src="${
        forecastData.forecast.forecastday[0].hour[1].condition.icon
      }" />
      <div>${forecastData.forecast.forecastday[0].hour[1].temp_c}℃</div>
    </div>
    <div class="weatherHours">
      <div>02:00</div>
      <img src="${
        forecastData.forecast.forecastday[0].hour[2].condition.icon
      }" />
      <div>${forecastData.forecast.forecastday[0].hour[2].temp_c}℃</div>
    </div>
    <div class="weatherHours">
      <div>03:00</div>
      <img src="${
        forecastData.forecast.forecastday[0].hour[3].condition.icon
      }" />
      <div>${forecastData.forecast.forecastday[0].hour[3].temp_c}</div>
    </div>
    <div class="weatherHours">
      <div>04:00</div>
      <img src="${
        forecastData.forecast.forecastday[0].hour[4].condition.icon
      }" />
      <div>${forecastData.forecast.forecastday[0].hour[4].temp_c}℃</div>
    </div>
    <div class="weatherHours">
      <div>05:00</div>
      <img src="${
        forecastData.forecast.forecastday[0].hour[5].condition.icon
      }" />
      <div>${forecastData.forecast.forecastday[0].hour[5].temp_c}℃</div>
    </div>
    <div class="weatherHours">
      <div>06:00</div>
      <img src="${
        forecastData.forecast.forecastday[0].hour[6].condition.icon
      }" />
      <div>${forecastData.forecast.forecastday[0].hour[6].temp_c}℃</div>
    </div>
    <div class="weatherHours">
      <div>07:00</div>
      <img src="${
        forecastData.forecast.forecastday[0].hour[7].condition.icon
      }" />
      <div>${forecastData.forecast.forecastday[0].hour[7].temp_c}℃</div>
    </div>
    <div class="weatherHours">
      <div>08:00</div>
      <img src="${
        forecastData.forecast.forecastday[0].hour[8].condition.icon
      }" />
      <div>${forecastData.forecast.forecastday[0].hour[8].temp_c}℃</div>
    </div>
    <div class="weatherHours">
      <div>09:00</div>
      <img src="${
        forecastData.forecast.forecastday[0].hour[9].condition.icon
      }"/>
      <div>${forecastData.forecast.forecastday[0].hour[9].temp_c}℃</div>
    </div>
    <div class="weatherHours">
      <div>10:00</div>
      <img src="${
        forecastData.forecast.forecastday[0].hour[10].condition.icon
      }"/>
      <div>${forecastData.forecast.forecastday[0].hour[10].temp_c}℃</div>
    </div>
    <div class="weatherHours">
      <div>11:00</div>
      <img src="${
        forecastData.forecast.forecastday[0].hour[11].condition.icon
      }" />
      <div>${forecastData.forecast.forecastday[0].hour[11].temp_c}℃</div>
    </div>
    <div class="weatherHours">
      <div>12:00</div>
      <img src="${
        forecastData.forecast.forecastday[0].hour[12].condition.icon
      }" />
      <div>${forecastData.forecast.forecastday[0].hour[12].temp_c}℃</div>
    </div>
    <div class="weatherHours">
      <div>13:00</div>
      <img src="${
        forecastData.forecast.forecastday[0].hour[13].condition.icon
      }" />
      <div>${forecastData.forecast.forecastday[0].hour[13].temp_c}℃</div>
    </div>
    <div class="weatherHours">
      <div>14:00</div>
      <img src="${
        forecastData.forecast.forecastday[0].hour[14].condition.icon
      }" />
      <div>${forecastData.forecast.forecastday[0].hour[14].temp_c}℃</div>
    </div>
    <div class="weatherHours">
      <div>15:00</div>
      <img src="${
        forecastData.forecast.forecastday[0].hour[15].condition.icon
      }" />
      <div>${forecastData.forecast.forecastday[0].hour[15].temp_c}℃</div>
    </div>
    <div class="weatherHours">
        <div>16:00</div>
        <img src="${
          forecastData.forecast.forecastday[0].hour[16].condition.icon
        }" />
        <div>${forecastData.forecast.forecastday[0].hour[16].temp_c}℃</div>
    </div> 
    <div class="weatherHours">
        <div>17:00</div>
        <img src="${
          forecastData.forecast.forecastday[0].hour[17].condition.icon
        }" />
        <div>${forecastData.forecast.forecastday[0].hour[17].temp_c}℃</div>
    </div>
    <div class="weatherHours">
        <div>18:00</div>
        <img src="${
          forecastData.forecast.forecastday[0].hour[18].condition.icon
        }" />
        <div>${forecastData.forecast.forecastday[0].hour[18].temp_c}℃</div>
    </div>
    <div class="weatherHours">
        <div>19:00</div>
        <img src="${
          forecastData.forecast.forecastday[0].hour[19].condition.icon
        }" />
        <div>${forecastData.forecast.forecastday[0].hour[19].temp_c}℃</div>
    </div>
    <div class="weatherHours">
        <div>20:00</div>
        <img src="${
          forecastData.forecast.forecastday[0].hour[20].condition.icon
        }" />
        <div>${forecastData.forecast.forecastday[0].hour[20].temp_c}℃</div>
    </div>
    <div class="weatherHours">
        <div>21:00</div>
        <img src="${
          forecastData.forecast.forecastday[0].hour[21].condition.icon
        }" />
        <div>${forecastData.forecast.forecastday[0].hour[21].temp_c}℃</div>
    </div>
    <div class="weatherHours">
        <div>22:00</div>
        <img src="${
          forecastData.forecast.forecastday[0].hour[22].condition.icon
        }" />
        <div>${forecastData.forecast.forecastday[0].hour[22].temp_c}℃</div>
    </div>
    <div class="weatherHours">
        <div>23:00</div>
        <img src="${
          forecastData.forecast.forecastday[0].hour[23].condition.icon
        }" />
        <div>${forecastData.forecast.forecastday[0].hour[23].temp_c}℃</div>
    </div>
  </div>
</div>
      `;
    let cityName = currentData.location.name;

    if (cities.includes(cityName)) {
      alert("Город уже добавлен");
    } else {
      cities.push(cityName);
      swiperWrapper.insertAdjacentHTML("afterbegin", htmlCode);
    }
    if (!swiper) {
      swiper = new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
        navigation: {
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        },
      });
    } else {
      swiper.update();
    }
    updateStyles();
    updateStylesRemoveButton();
  });
};
function updateStyles() {
  const card = document.querySelectorAll(".card");
  const prevButton = document.querySelector(".custom-prev");
  const nextButton = document.querySelector(".custom-next");

  if (window.innerWidth > 768 && card.length > 1) {
    prevButton.style.display = "block";
    nextButton.style.display = "block";
  } else {
    prevButton.style.display = "none";
    nextButton.style.display = "none";
  }
}
const removeButton = document.querySelector(".remove");

function updateStylesRemoveButton() {
  const card = document.querySelectorAll(".card");
  if (card.length > 0) {
    removeButton.style.display = "block";
  } else {
    removeButton.style.display = "none";
  }
}

removeButton.addEventListener("click", () => {
  const activeSlide = swiper.slides[swiper.activeIndex];

  if (activeSlide) {
    const cityName = activeSlide.querySelector(".city").textContent;
    const cityIndex = cities.indexOf(cityName);
    if (cityIndex !== -1) {
      cities.splice(cityIndex, 1);
    }
    swiper.removeSlide(swiper.activeIndex);
    swiper.update();
    updateStyles();
    updateStylesRemoveButton();
  }
});
updateStyles();
window.addEventListener("resize", updateStyles);
