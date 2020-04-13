var toggleBtn = document.querySelector('#toggle');

var topNumbers, bottomNumbers, topCardsBackgrounds, bottomCardsBackgrounds, topBackground, mainBackground;

topNumbers = document.querySelectorAll('.card__info-header');

bottomNumbers = document.querySelectorAll('.card-result__number');

topCardsBackgrounds = document.querySelectorAll('.top-dashboard__card');

bottomCardsBackgrounds = document.querySelectorAll('.bottom-dashboard__cards-card');

topBackground = document.querySelector('.main-header');

mainBackground = document.querySelector('body');

mainHeaderHeading = document.querySelector('.main-header__info h1');


toggleBtn.addEventListener('click', toggleTheme);

function toggleTheme() {

    topNumbers.forEach(element => {
        toggleClasslist(element, 'darktheme-heading');
    });

    bottomNumbers.forEach(element => {
        toggleClasslist(element, 'darktheme-heading');  
    });

    topCardsBackgrounds.forEach(element => {
        toggleClasslist(element, 'darktheme-cardbg')
    });

    bottomCardsBackgrounds.forEach(element => {
        toggleClasslist(element, 'darktheme-cardbg')
    });

    toggleClasslist(topBackground, 'darktheme-topbackground');

    toggleClasslist(mainBackground, 'darktheme-background');

    toggleClasslist(mainHeaderHeading, 'darktheme-heading');

}

function toggleClasslist(element, cls) {
    element.classList.add(cls);
}