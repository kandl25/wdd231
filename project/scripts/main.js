const currentYearElement = document.querySelector("#currentyear");
const lastModifiedElement = document.querySelector("#lastmodified");

const today = new Date();
const currentYear = today.getFullYear();

currentYearElement.innerHTML = currentYear;
lastModifiedElement.innerHTML = document.lastModified;

const hamButton = document.querySelector('#menu-icon');
const mainNav = document.querySelector('#main-nav');

hamButton.addEventListener("click", () => {
  hamButton.classList.toggle("open");
  mainNav.classList.toggle("open");
});
