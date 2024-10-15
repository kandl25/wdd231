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

//spotlight
/*const url = "https://kandl25.github.io/wdd231/chamber/data/members.json";
fetch(url)
  .then(response => response.json())
  .then(data => {
    randomMembers(data);
  })
  .catch(error => console.error('Error fetching JSON:', error));

function randomMembers(data) {
  const randomThree = [];
  while (randomThree.length < 3) {
    const randomIndex = Math.floor(Math.random() * data.length);
    if (!randomThree.includes(data[randomIndex])) {
      randomThree.push(data[randomIndex]);
    }
  }
  randomThree.forEach(member => {
    displayRandomThree(member);
  });
}

function displayRandomThree(member) {
  const container = document.querySelector('#spotlight');
  const memberElement = document.createElement('div');
  memberElement.textContent = JSON.stringify(member);
  container.appendChild(memberElement);
}*/
