const cardsSection = document.querySelector(".cards-section");
const addButton = document.querySelector(".add-button");
const removeButton = document.querySelector(".remove-button");
const resetButton = document.querySelector(".reset-button");
const count = document.querySelector(".count");

const cards_info = [
  {
    id: 4,
    companyName: "Tokyo Traders",
    contactName: "Yoshi Nagase",
    contactTitle: "Marketing Manager",
  },
  {
    id: 5,
    companyName: "Cooperativa de Quesos 'Las Cabras'",
    contactName: "Antonio del Valle Saavedra",
    contactTitle: "Export Administrator",
  },
  {
    id: 6,
    companyName: "Mayumi's",
    contactName: "Mayumi Ohno",
    contactTitle: "Marketing Representative",
  },
  {
    id: 7,
    companyName: "Pavlova Ltd.",
    contactName: "Ian Devling",
    contactTitle: "Marketing Manager",
  },
  {
    id: 8,
    companyName: "Specialty Biscuits Ltd.",
    contactName: "Peter Wilson",
    contactTitle: "Sales Representative",
  },
  {
    id: 9,
    companyName: "PB Knäckebröd AB",
    contactName: "Lars Peterson",
    contactTitle: "Sales Agent",
  },
  {
    id: 10,
    companyName: "Refrescos Americanas LTDA",
    contactName: "Carlos Diaz",
    contactTitle: "Marketing Manager",
  },
];

cards_info.forEach((element) => {
  const card = document.createElement("article");
  card.classList.add("card");
  card.setAttribute("data-id", element.id);
  card.innerHTML = `
        <h2 class="card__name">${element.contactName}</h2>
        <p class="card__title">${element.contactTitle}</p>
        <p class="card__company">${element.companyName}</p>
    `;
  cardsSection.appendChild(card);
});

addButton.addEventListener("click", (event) => {
    let valueAsNumber = Number(count.textContent);
    valueAsNumber++;
    count.textContent = valueAsNumber;
});

removeButton.addEventListener("click",(event) => {
    let valueAsNumber = Number(count.textContent);
    valueAsNumber--;
    count.textContent = valueAsNumber;
})

resetButton.addEventListener("click",(event) => {
    count.innerHTML = '0';
})
