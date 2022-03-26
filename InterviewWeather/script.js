let foreCastWeather = true;
let unixTime = 0;
let counter = 0;
const curWeather = document.getElementById('curWeath');
const futureLists = document.getElementById('futureWeather').children;
const futureTemp = document.getElementById('futureTemp').children;


document.getElementById('cities').addEventListener('change', changeCity);
document.getElementById('Duration').addEventListener('change', period);


function changeCity() {
  let cities = document.getElementById('cities').value;
  cities === 'NewYork' ? NewYork() : cities === 'Madrid' ? Madrid() : Paris();
}
// End Of Cities Selector
// 2. period Selector

function period() {
  let Duration = document.getElementById('Duration').value;
  if (Duration === 'ThisWeek') {
    foreCastWeather = false;
    changeCity();
  } else if (Duration === 'Today') {
    foreCastWeather = true;
    changeCity();
  }
}
//End of period Selector

function NewYork() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    'https://api.openweathermap.org/data/2.5/onecall?lat=40.71427&lon=-74.00597&exclude=minutely&units=metric&appid=333e8af612bb3a2453e7d47d2e7667a8'
  );
  xhr.responseType = 'json';
  xhr.onload = () => {
    // console.log(xhr.response)
    const weatherList = xhr.response;
    console.log(weatherList);
    // Current Weather
    curWeather.innerHTML = Math.round(weatherList.current.temp) + ' \u00B0C';
    curWeather.nextElementSibling.innerHTML =
      weatherList.current.weather[0].main;
    // End Current Weather

    //Current Date
    unixTime = weatherList.current.dt;
    let nDate = new Date(unixTime * 1000);
    let currentDate = nDate.toDateString();
    document.getElementById('cDate').innerHTML = currentDate;
    //End C date



// Selector Today & This Week
    const oneWeek = weatherList.daily;
    const oneDay = weatherList.hourly;
// false === This week / True === Today

// -----> This Week Selector
    if (foreCastWeather === false) {
    // Day     
      for (const div of futureLists) {
        const dateAfter = new Date(oneWeek[counter + 1].dt * 1000);
        const dateAfterString = dateAfter.toDateString();
        const dayAfter = dateAfterString.substring(
          0,
          dateAfterString.indexOf(' ')
        );
        div.querySelector('p').innerHTML = dayAfter;
        counter === 6 ? (counter = 0) : counter++;
      }
      counter = 0;
    // Temprature
      for (const temper of futureTemp) {
        temper.querySelector('span').innerHTML =
          oneWeek[counter + 1].temp.day + ' \u00B0C';
        counter === 6 ? (counter = 0) : counter++;
      }
      counter = 0;
    }
// -----> End of This Week Selector

    // ---> Today Selector
     else {
    // Time     
      for (const div of futureLists) {
        const timeAfter = new Date(oneDay[counter + 1].dt * 1000);
        const hours = timeAfter.getHours();
        div.querySelector('p').innerHTML = hours;
        counter === 6 ? (counter = 0) : counter++;
      }
      counter = 0;
    // Temprature
      for (const temper of futureTemp) {
        temper.querySelector('span').innerHTML =
          oneDay[counter + 1].temp + ' \u00B0C';
        counter === 6 ? (counter = 0) : counter++;
      }
      counter = 0;
    }
    // ---> End Of Today Selector
  };
  xhr.send();
}

function Madrid() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    'https://api.openweathermap.org/data/2.5/onecall?lat=40.4165&lon=-3.70256&exclude=minutely&units=metric&appid=333e8af612bb3a2453e7d47d2e7667a8'
  );
  xhr.responseType = 'json';
  xhr.onload = () => {
    // console.log(xhr.response)
    const weatherList = xhr.response;
    console.log(weatherList);
    // Current Weather
    curWeather.innerHTML = Math.round(weatherList.current.temp) + ' \u00B0C';
    curWeather.nextElementSibling.innerHTML =
      weatherList.current.weather[0].main;
    // End Current Weather

    //Current Date
    unixTime = weatherList.current.dt;
    let nDate = new Date(unixTime * 1000);
    let currentDate = nDate.toDateString();
    document.getElementById('cDate').innerHTML = currentDate;
    //End C date



// Selector Today & This Week
    const oneWeek = weatherList.daily;
    const oneDay = weatherList.hourly;
// false === This week / True === Today

// -----> This Week Selector
    if (foreCastWeather === false) {
    // Day     
      for (const div of futureLists) {
        const dateAfter = new Date(oneWeek[counter + 1].dt * 1000);
        const dateAfterString = dateAfter.toDateString();
        const dayAfter = dateAfterString.substring(
          0,
          dateAfterString.indexOf(' ')
        );
        div.querySelector('p').innerHTML = dayAfter;
        counter === 6 ? (counter = 0) : counter++;
      }
      counter = 0;
    // Temprature
      for (const temper of futureTemp) {
        temper.querySelector('span').innerHTML =
          oneWeek[counter + 1].temp.day + ' \u00B0C';
        counter === 6 ? (counter = 0) : counter++;
      }
      counter = 0;
    }
// -----> End of This Week Selector

    // ---> Today Selector
     else {
    // Time     
      for (const div of futureLists) {
        const timeAfter = new Date(oneDay[counter + 1].dt * 1000);
        const hours = timeAfter.getHours();
        div.querySelector('p').innerHTML = hours;
        counter === 6 ? (counter = 0) : counter++;
      }
      counter = 0;
    // Temprature
      for (const temper of futureTemp) {
        temper.querySelector('span').innerHTML =
          oneDay[counter + 1].temp + ' \u00B0C';
        counter === 6 ? (counter = 0) : counter++;
      }
      counter = 0;
    }
    // ---> End Of Today Selector
  };
  xhr.send();
}

function Paris() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    'https://api.openweathermap.org/data/2.5/onecall?lat=48.8566&lon=2.3522&exclude=minutely&units=metric&appid=333e8af612bb3a2453e7d47d2e7667a8'
  );
  xhr.responseType = 'json';
  xhr.onload = () => {
    // console.log(xhr.response)
    const weatherList = xhr.response;
    console.log(weatherList);
    // Current Weather
    curWeather.innerHTML = Math.round(weatherList.current.temp) + ' \u00B0C';
    curWeather.nextElementSibling.innerHTML =
      weatherList.current.weather[0].main;
    // End Current Weather

    //Current Date
    unixTime = weatherList.current.dt;
    let nDate = new Date(unixTime * 1000);
    let currentDate = nDate.toDateString();
    document.getElementById('cDate').innerHTML = currentDate;
    //End C date



// Selector Today & This Week
    const oneWeek = weatherList.daily;
    const oneDay = weatherList.hourly;
// false === This week / True === Today

// -----> This Week Selector
    if (foreCastWeather === false) {
    // Day     
      for (const div of futureLists) {
        const dateAfter = new Date(oneWeek[counter + 1].dt * 1000);
        const dateAfterString = dateAfter.toDateString();
        const dayAfter = dateAfterString.substring(
          0,
          dateAfterString.indexOf(' ')
        );
        div.querySelector('p').innerHTML = dayAfter;
        counter === 6 ? (counter = 0) : counter++;
      }
      counter = 0;
    // Temprature
      for (const temper of futureTemp) {
        temper.querySelector('span').innerHTML =
          oneWeek[counter + 1].temp.day + ' \u00B0C';
        counter === 6 ? (counter = 0) : counter++;
      }
      counter = 0;
    }
// -----> End of This Week Selector

    // ---> Today Selector
     else {
    // Time     
      for (const div of futureLists) {
        const timeAfter = new Date(oneDay[counter + 1].dt * 1000);
        const hours = timeAfter.getHours();
        div.querySelector('p').innerHTML = hours;
        counter === 6 ? (counter = 0) : counter++;
      }
      counter = 0;
    // Temprature
      for (const temper of futureTemp) {
        temper.querySelector('span').innerHTML =
          oneDay[counter + 1].temp + ' \u00B0C';
        counter === 6 ? (counter = 0) : counter++;
      }
      counter = 0;
    }
    // ---> End Of Today Selector
  };
  xhr.send();
}
