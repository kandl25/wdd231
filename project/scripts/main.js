const currentYearElement = document.querySelector("#currentyear");
const lastModifiedElement = document.querySelector("#lastmodified");
const darkmode1 = document.querySelector("#themetoggle-desk");
const darkmode2 = document.querySelector("#themetoggle-mobile");
const bodyTag = document.querySelector("body");
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('responsive');
});

const today = new Date();
const currentYear = today.getFullYear();

currentYearElement.innerHTML = currentYear;
lastModifiedElement.innerHTML = document.lastModified;