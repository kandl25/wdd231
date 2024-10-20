const nonProfitMem = document.querySelector("#non-profit");
const standardMem = document.querySelector("#standard");
const silverMem = document.querySelector("#silver");
const goldMem = document.querySelector("#gold");

const npButton = document.querySelector("#np-button");
const standardButton = document.querySelector("#standard-button");
const silverButton = document.querySelector("#silver-button");
const goldButton = document.querySelector("#gold-button");

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