const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#graphic');
const captionDesc = document.querySelector('#description');
const weatherToday = document.querySelector('#today');
const weatherTomorrow = document.querySelector('#tomorrow');
const weatherNext = document.querySelector('#next-day');

const key = "ac0affaa84bb8da3300470fa6a1fd7ee";
const lat = "43.82280560320428";
const long = "-111.79247443396717";

const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=imperial`;
const futureURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}&units=imperial`;

async function apiFetch() {
  try {
    const response = await fetch(currentURL);
    if (response.ok) {
      const data = await response.json();
      //console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  captionDesc.innerHTML = data.weather[0].description;
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', data.weather[0].description);
}

apiFetch();

async function forecastApiFetch() {
  try {
    const response = await fetch(futureURL);
    if (response.ok) {
      const data = await response.json();
      displayForecast(data);
    }
  } catch (error) {
    console.log(error);
  }
}

function displayForecast(data) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  for (let i = 1; i <= 3; i++) { 
    const forecastDay = new Date(data.list[i * 8].dt_txt);
    const forecastDayIndex = forecastDay.getDay();
    const forecastDayName = daysOfWeek[forecastDayIndex];
    if (i === 1) {
      weatherToday.innerHTML = `Tomorrow: ${Math.floor(data.list[i * 8].main.temp)}&deg;F`;
    } else if (i === 2) {
      weatherTomorrow.innerHTML = `${forecastDayName}: ${Math.floor(data.list[i * 8].main.temp)}&deg;F`;
    } else {
      weatherNext.innerHTML = `${forecastDayName}: ${Math.floor(data.list[i * 8].main.temp)}&deg;F`;
    }
  }
}

forecastApiFetch();
