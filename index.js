const formButton = document.querySelector('.form__button');
const formDiv = document.getElementsByClassName('form__div')[0];

formButton.addEventListener('click',(event) => {
    event.preventDefault();
    const colorInput__Value = document.getElementById('color-input').value;
    formDiv.style.background = colorInput__Value;
    const widthInput__Value = document.getElementById('width-input').value;
    formDiv.style.width = widthInput__Value + 'px';
})

const cityList = document.querySelector('.city-list');

cityList.addEventListener('click',(event) => {

    if(event.target.classList.contains('city')){
        event.target.classList.toggle("checked")
    }
})

const navbarButton = document.querySelector('.navbar__button');

navbarButton.addEventListener('click',(event) => {
    const navbarList = document.querySelector('.navbar__list')
    navbarList.classList.toggle('navbar__list--open')
})
