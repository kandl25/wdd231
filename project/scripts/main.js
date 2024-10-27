const currentYearElement = document.querySelector("#currentyear");
const lastModifiedElement = document.querySelector("#lastmodified");

const today = new Date();
const currentYear = today.getFullYear();

currentYearElement.innerHTML = currentYear;
lastModifiedElement.innerHTML = document.lastModified;

const hamButton = document.querySelector('#menu');
const mainNav = document.querySelector('.navigation');

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});
