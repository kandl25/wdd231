const currentYearElement = document.querySelector("#currentyear");
const lastModifiedElement = document.querySelector("#lastmodified");
const darkmode1 = document.querySelector("#themetoggle-desk");
const darkmode2 = document.querySelector("#themetoggle-mobile");
const bodyTag = document.querySelector("body");
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('open');
  hambutton.classList.toggle('open');
});

const today = new Date();
const currentYear = today.getFullYear();

currentYearElement.innerHTML = currentYear;
lastModifiedElement.innerHTML = document.lastModified;

darkModeTriggered();

darkmode1.addEventListener('click', darkModeTriggered);
darkmode2.addEventListener('click', darkModeTriggered);

function darkModeTriggered() {
  bodyTag.classList.toggle("dark-mode");
}