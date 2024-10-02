const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified")
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

const today = new Date();
const lastMod = document.lastModified;

year.innerHTML = `${today.getFullYear()}`;
lastmodified.innerHTML = `Last Modification: ${lastMod}`;

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

/* directory */
async function fetchMembers() {
    const response = await fetch('data/members.json');
    const membersData = await response.json();
  
    const memberContainer = document.getElementById('member-container');
    const toggleButton = document.getElementById('toggle-view');
  
    let isGridView = true;
  
    function renderMembers(data) {
      memberContainer.innerHTML = '';
  
      data.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
  
        if (isGridView) {
          memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}">Visit Website</a></p>
          `;
        } else {
          memberCard.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}">Visit Website</a></p>
          `;
        }
  
        memberContainer.appendChild(memberCard);
      });
    }
  
    toggleButton.addEventListener('click', () => {
      isGridView = !isGridView;
      renderMembers(membersData);
    });
  
    renderMembers(membersData);
  }
  
  fetchMembers();

  /* dark mode */
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});