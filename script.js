var toggleBtn = document.querySelector('#toggle');

var topNumbers, bottomNumbers, topCardsBackgrounds, bottomCardsBackgrounds, topBackground, mainBackground;

topNumbers = document.querySelectorAll('.card__info-header');

bottomNumbers = document.querySelectorAll('.card-result__number');

topCardsBackgrounds = document.querySelectorAll('.top-dashboard__card');

bottomCardsBackgrounds = document.querySelectorAll('.bottom-dashboard__cards-card');

topBackground = document.querySelector('.main-header');

mainBackground = document.querySelector('body');

mainHeaderHeading = document.querySelector('.main-header__info h1');

subheaders = document.querySelectorAll('.card__info-subheader');

resultHeaders = document.querySelectorAll('.card-result__header');

cardSocialsParagraphs = document.querySelectorAll('.card__socials p');

bottomDashboardHeading = document.querySelector('.bottom-dashboard h2');

darkCards = document.querySelectorAll('.top-dashboard__card ' + ',' + '.bottom-dashboard__cards-card');


toggleBtn.addEventListener('click', function () {

    var toggleCheckbox = document.getElementById('toggle-checkbox');
    if (toggleCheckbox.checked) {

        addDarkTheme();
    } else {
        removeDarkTheme();
    }
});


function addDarkTheme() {

    topNumbers.forEach(element => {
        addClasslist(element, 'darktheme-heading');
    });

    bottomNumbers.forEach(element => {
        addClasslist(element, 'darktheme-heading');
    });

    topCardsBackgrounds.forEach(element => {
        addClasslist(element, 'darktheme-cardbg');
    });

    bottomCardsBackgrounds.forEach(element => {
        addClasslist(element, 'darktheme-cardbg');
    });

    addClasslist(topBackground, 'darktheme-topbackground');

    addClasslist(mainBackground, 'darktheme-background');

    addClasslist(mainHeaderHeading, 'darktheme-heading');

    addClasslist(bottomDashboardHeading, 'darktheme-heading');

    subheaders.forEach(element => {
        addClasslist(element, 'darktheme-text');
    });

    resultHeaders.forEach(element => {
        addClasslist(element, 'darktheme-text');
    });

    cardSocialsParagraphs.forEach(element => {
        addClasslist(element, 'darktheme-text');
    });
}

function removeDarkTheme() {
    topNumbers.forEach(element => {
        removeClassList(element, 'darktheme-heading');
    });

    bottomNumbers.forEach(element => {
        removeClassList(element, 'darktheme-heading');
    });

    topCardsBackgrounds.forEach(element => {
        removeClassList(element, 'darktheme-cardbg')
    });

    bottomCardsBackgrounds.forEach(element => {
        removeClassList(element, 'darktheme-cardbg')
    });

    removeClassList(topBackground, 'darktheme-topbackground');

    removeClassList(mainBackground, 'darktheme-background');

    removeClassList(mainHeaderHeading, 'darktheme-heading');

    removeClassList(bottomDashboardHeading, 'darktheme-heading');

    subheaders.forEach(element => {
        removeClassList(element, 'darktheme-text');
    });

    resultHeaders.forEach(element => {
        removeClassList(element, 'darktheme-text');
    });

    cardSocialsParagraphs.forEach(element => {
        removeClassList(element, 'darktheme-text');
    });
}

function addClasslist(element, cls) {
    element.classList.add(cls);
    element.style.transition = "color 0.5s";
    element.style.transition = "background-color 1s";

}

function removeClassList(element, cls) {
    element.classList.remove(cls);
    element.style.transition = "color 0.5s";
    element.style.transition = "background-color 1s";
}
