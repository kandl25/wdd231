const url = "https://github.com/kandl25/wdd231/blob/main/chamber/data/member-level.json"
const silverMem = document.querySelector("#silver");
const goldMem = document.querySelector("#gold");
const platinumMem = document.querySelector("#platinum");
const silverButton = document.querySelector("silver-button");
const goldButton = document.querySelector("#gold-button");
const platinumButton = document.querySelector("#platinum-button");

async function getLevelData() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        silverButton.addEventListener("click", () => {
            displayModal(data, silverMem, 0);
        })
        goldButton.addEventListener("click", () => {
            displayModal(data, goldMem, 1);
        })
        platinumButton.addEventListener("click", () => {
            displayModal(data, platinumMem, 2);
        })
    }
}

function displayModal(data, modal, index) {
    modal.innerHTML = "";
    const closeModal = document.createElement("button")
    closeModal.setAttribute("id","close-modal"); 
    closeModal.textContent = "X";

    const modalName = document.createElement("h2"); 
    modalName.innerHTML = data[index].name;
    const modalCost = document.createElement("p");
    modalCost.innerHTML = `$${data[index].cost} Annually`;
    const modalBenefits = document.createElement("h3")
    modalBenefits.innerHTML = "Benefits";
    const modalList = document.createElement("ul");
    data[index].benefits.forEach(benefit => {
        const benefitItem = document.createElement("li") 
        benefitItem.innerHTML = benefit;
        modalList.appendChild(benefitItem);
    })

    modal.appendChild(closeModal);
    modal.appendChild(modalName);
    modal.appendChild(modalCost);
    modal.appendChild(modalBenefits);
    modal.appendChild(modalList);

    modal.showModal();
    
    closeModal.addEventListener("click", () => {
        modal.close();
    })
}

getLevelData();

// Create Timestamp
function getTime() {
    const date = new Date();
    const formattedDate = date.toLocaleString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    })
    return formattedDate;
}

const timestamp = document.querySelector("#timestamp")
timestamp.value = getTime();