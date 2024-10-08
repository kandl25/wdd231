// DOM objects to use
const listToggle = document.querySelector("#view");

listToggle.addEventListener('click', () => {
  cardsContainer.classList.toggle('list');
});

const cardsContainer = document.querySelector("#cards");
const url = "https://kandl25.github.io/wdd231/chamber/data/members.json";

async function getMembers() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data.members);
}

const displayMembers = (members) => {
  cardsContainer.innerHTML = "";
  let counter = 0;

  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("company-card");

    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = member.name;
    card.appendChild(name);

    const image = document.createElement("img");
    image.setAttribute("src", member.image);
    image.setAttribute("alt", member.name ? `${member.name} company logo` : "Company Logo");
    if (counter > 3) {
      image.setAttribute("loading", "lazy");
    }
    image.setAttribute("width", 100);
    image.setAttribute("height", 100);
    card.appendChild(image);

    const address = document.createElement("p");
    address.classList.add("address");
    address.textContent = member.address;
    card.appendChild(address);

    const phone = document.createElement("p");
    phone.classList.add("phone");
    phone.textContent = `Phone: ${member.phone}`;
    card.appendChild(phone);

    const url = document.createElement("p");
    url.classList.add("url");
    url.textContent = member.url;
    card.appendChild(url);

    const membership = document.createElement("p")
    membership.classList.add("membership");
    if(member.membership == "platinum") {
        membership.classList.add("platinum");
        membership.textContent = "Platinum Member";
    }
    if(member.membership == "silver") {
        membership.classList.add("silver");
        membership.textContent = "Silver Member";
    }
    if(member.membership == "gold") {
        membership.classList.add("gold");
        membership.textContent = "Gold Member";
    }
    card.appendChild(membership);
 
    cardsContainer.appendChild(card);
    counter++;
  });
}

getMembers();