const currentYearElement = document.querySelector("#currentyear");
const lastModifiedElement = document.querySelector("#lastmodified");

const today = new Date();
const currentYear = today.getFullYear();

currentYearElement.innerHTML = currentYear;
lastModifiedElement.innerHTML = document.lastModified;

document.addEventListener("DOMContentLoaded", function() {
    const navButton = document.getElementById("nav-button");
    const navList = document.getElementById("nav-list");

    navButton.addEventListener("click", function() {
        navList.classList.toggle('show');
        navButton.classList.toggle('show');
    });
});
