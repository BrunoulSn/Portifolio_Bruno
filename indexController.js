function disableNavBar() {
    let navBar = document.getElementById('navBarAside');
    let navBarText = document.getElementById('navBarText');
    let navBarOptions = document.getElementById('navBarOptions');
    let navBarLogo = document.getElementById('navBarLogo');
    let menuIcon = document.getElementById("menuIcon");

    if (navBar.classList.contains("closeNavBar")) {

        navBar.classList.remove('closeNavBar');
        navBarText.classList.remove('navBarItemOff');
        navBarOptions.classList.remove('navBarItemOff');
        navBarLogo.classList.remove('navBarItemOff');
        menuIcon.classList.remove('menuIconRight');

        navBarText.classList.add('navBarItemOn');
        navBarOptions.classList.add('navBarItemOn');
        navBarLogo.classList.add('navBarItemOn');

    } else {
        navBarText.classList.remove('navBarItemOn');
        navBarOptions.classList.remove('navBarItemOn');
        navBarLogo.classList.remove('navBarItemOn');

        menuIcon.classList.add('menuIconRight');
        navBar.classList.add('closeNavBar');
        navBarText.classList.add('navBarItemOff');
        navBarOptions.classList.add('navBarItemOff');
        navBarLogo.classList.add('navBarItemOff');
    }
};