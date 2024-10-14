const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#graphic');
const captionDesc = document.querySelector('#description');
const weatherToday = document.querySelector('#today');
const weatherTomorrow = document.querySelector('#tomorrow');
const weatherNext = document.querySelector('#next-day');

const key = "ac0affaa84bb8da3300470fa6a1fd7ee"
const lat = "43.82280560320428"
const long = "-111.79247443396717"

const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=imperial`;
const futureURL = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(currentURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else{
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

