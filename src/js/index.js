function redirectToSection(redirectLocation) {
    let currentLocation = window.location.href;
    let redirectTo = currentLocation.substring(0, currentLocation.indexOf('#'));
    window.location.href = redirectTo + '#' + redirectLocation;
}


function classActivate(element) {
    let allActives = document.getElementsByClassName('active');
    for (let i = 0; i < allActives.length; i++) {
        allActives[i].classList.remove('active');
    }
    let redirectLocation = element.getAttribute('id');
    if (redirectLocation.indexOf('-') !== -1) {
        redirectLocation = redirectLocation.substring(0, redirectLocation.lastIndexOf('-'));
    }
    redirectToSection(redirectLocation);
    element.classList.add('active');
}

function classActivateListener() {
    classActivate(this);
}

function attachClassActivateListener() {
    links = document.getElementsByClassName('nav-link');
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = classActivateListener;
    }
}

function changeTheme() {
    let container = document.getElementById('container');
    let activeTheme = container.classList[0];

    let themeButtonIcon = document.getElementById('theme-icon');

    if (activeTheme === 'dark-theme') {
        container.classList.remove('dark-theme');
        container.classList.add('light-theme');
        themeButtonIcon.setAttribute('src', '../../resources/icons/moon.png');
    } else {
        container.classList.remove('light-theme');
        container.classList.add('dark-theme');
        themeButtonIcon.setAttribute('src', '../../resources/icons/sun.png');
    }
}

function attachChangeThemeListener() {
    let themeButton = document.getElementById('theme-button');
    themeButton.onclick = changeTheme;
}

function scrollListener() {
    let currentLocation = window.location.href;
    let scrollIcon = document.getElementById('scroll-arrow');

    currentLocation = currentLocation.substring(currentLocation.lastIndexOf('#') + 1);

    let allSections = ['home', 'about', 'experience', 'portfolio', 'skills', 'contact'];

    let currentPageLocationIndex = allSections.indexOf(currentLocation);

    if (currentPageLocationIndex === allSections.length - 1) {
        scrollIcon.classList.remove('fa-arrow-up');
        scrollIcon.classList.add('fa-arrow-down');
    }

    let nextIndex = currentPageLocationIndex + 1;

    if (nextIndex >= allSections.length && nextIndex !== -1) {
        nextIndex = 0;
    }


    if (nextIndex == allSections.length - 1) {
        scrollIcon.classList.remove('fa-arrow-down');
        scrollIcon.classList.add('fa-arrow-up');
    }


    scrollToSectionElement = document.getElementById(allSections[nextIndex] + '-link');
    classActivate(scrollToSectionElement);
}

function attachScrollListener() {
    let scrollButton = document.getElementById('scroll-button');
    scrollButton.onclick = scrollListener;
}


window.onload = () => {
    if (window.location.href.indexOf('#') === -1) {
        window.location.href += '#home';
    } else {
        window.location.href = window.location.href.replace(window.location.href.substring(window.location.href.indexOf('#')), '#home');
    }
    attachClassActivateListener();
    attachChangeThemeListener();
    attachScrollListener();
}