const cardsContainer = document.querySelector("#schedule-container");
const url = "https://github.com/kandl25/wdd231/blob/main/project/data/class.json";

async function getClasses() {
  const response = await fetch(url);
  const data = await response.json();
  displayClasses(data.class);
}

const displayClasses = (classes) => {
  cardsContainer.innerHTML = "";
  let counter = 0;

  classes.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("directory");

    const name = document.createElement("h2");
    name.classList.add("style");
    name.textContent = member.style;
    card.appendChild(name);

    const image = document.createElement("img");
    image.setAttribute("src", member.image);
    image.setAttribute("alt", member.name ? `${member.name} company logo` : "Company Logo");
    if (counter > 3) {
      image.setAttribute("loading", "lazy");
    }
    image.setAttribute("width", 300);
    image.setAttribute("height", 500);
    card.appendChild(image);

    const address = document.createElement("p");
    address.classList.add("teacher");
    address.textContent = member.teacher;
    card.appendChild(teacher);

    const phone = document.createElement("p");
    phone.classList.add("time");
    phone.textContent = member.time;
    card.appendChild(time);

    const age = document.createElement("p");
    url.classList.add("age");
    url.textContent = member.age;
    card.appendChild(age);

    const cost = document.createElement("p");
    url.classList.add("cost");
    url.textContent = member.cost;
    card.appendChild(cost);
 
    cardsContainer.appendChild(card);
    counter++;
  });
}

getClasses();