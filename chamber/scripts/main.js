const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified")
const darkmode1 = document.querySelector("#themetoggle-desk");
const darkmode2 = document.querySelector("#themetoggle-mobile");
const bodyTag = document.querySelector("body");
/* hamburger menu */
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const today = new Date();
let currentYear = today.getFullYear();

currentYear.innerHTML = currentYear;
lastModified.innerHTML = document.lastModified;

darkmode1.addEventListener('click', darkModeTriggered);
darkmode2.addEventListener('click', darkModeTriggered);

function darkModeTriggered() {
    bodyTag.classList.toggle("dark-mode");
}