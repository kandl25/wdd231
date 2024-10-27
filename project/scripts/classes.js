const cardsContainer = document.querySelector("#schedule-container");
const url = "https://raw.githubusercontent.com/kandl25/wdd231/refs/heads/main/project/data/class.json";

async function getClasses() {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(classes)
    displayClasses(data.classes);
  }
  
    const displayClasses = (classes) => {
        cardsContainer.innerHTML = "";
  
    classes.forEach((classInfo) => {
        const card = document.createElement("div");
        card.classList.add("directory");
  
        const style = document.createElement("h2");
        style.classList.add("style");
        style.textContent = classInfo.style;
        card.appendChild(style);
    
        const image = document.createElement("img");
        image.setAttribute("src", classInfo.image);
        image.setAttribute("alt", `${classInfo.style} class image`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", 310);
        image.setAttribute("height", 500);
        card.appendChild(image);

        const teacher = document.createElement("p");
        teacher.classList.add("teacher");
        teacher.textContent = `Teacher: ${classInfo.teacher}`;
        card.appendChild(teacher);
    
        const time = document.createElement("p");
        time.classList.add("time");
        time.textContent = `Time: ${classInfo.time}`;
        card.appendChild(time);
    
        const age = document.createElement("p");
        age.classList.add("age");
        age.textContent = `Age: ${classInfo.age}`;
        card.appendChild(age);
    
        const cost = document.createElement("p");
        cost.classList.add("cost");
        cost.textContent = `Cost: ${classInfo.cost}`;
        card.appendChild(cost);
    
        cardsContainer.appendChild(card);
    });
  } 
  
  getClasses();