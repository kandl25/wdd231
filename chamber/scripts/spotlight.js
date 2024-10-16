const dataURL = 'https://kandl25.github.io/wdd231/chamber/data/members.json';
const display = document.querySelector("#spotlight");

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

async function getDirectoryData() {
  const response = await fetch(dataURL);
  const data = await response.json();
  const inputBusinesses = getMultipleRandom(data.businesses, 3)

  displayBusinesses(inputBusinesses);
}  

getDirectoryData();

const displayBusinesses = (businesses) => {
    const cards = document.querySelector('div.businesses');
    businesses.forEach((business) => {
        let card     = document.createElement('section');
        let h3       = document.createElement('h3');
        let logo     = document.createElement('img');
        let para1    = document.createElement('p');
        let url      = document.createElement('a');
        h3.textContent = `${business.companyname} `;

        para1.style.textAlign = "center";
        para1.innerHTML       = `Contact Name: ${business.contactname}`;
        para1.innerHTML      += " <br> "
        para1.innerHTML      += `Phone Number: ${business.phone}`;
        para1.innerHTML      += " <br> "
        para1.innerHTML      += `Membership Level: ${business.membershiplevel}`;
        para1.innerHTML      += " <br> "
        para1.innerHTML      += `<a href="${business.businessurl}" target="_blank"> Company Website</a>`;

        url.setAttribute('href', business.businessurl);
        url.setAttribute('target', "_blank");

        logo.setAttribute('src', business.imageurl);
        logo.setAttribute('alt', `Logo for ${business.companyname} `);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '150');
        logo.setAttribute('height', '200');
        
        card.appendChild(h3);
        card.appendChild(para1);
        card.appendChild(url);
        card.appendChild(logo);
        
        cards.appendChild(card);

        })
    }