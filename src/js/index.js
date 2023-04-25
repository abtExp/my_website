links = document.getElementsByClassName('nav-link');

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        let allActives = document.getElementsByClassName('active');
        for (let i = 0; i < allActives.length; i++) {
            allActives[i].classList.remove('active');
        }
        let redirectLocation = this.getAttribute('id');
        redirectLocation = redirectLocation.substring(0, redirectLocation.lastIndexOf('-'));
        let currentLocation = window.location.href;
        let redirectTo = currentLocation.substring(0, currentLocation.lastIndexOf('#'));
        window.location.href = redirectTo + '#' + redirectLocation;
        this.classList.add('active');
    });
}