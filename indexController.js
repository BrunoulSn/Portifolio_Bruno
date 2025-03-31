function disableNavBar() {
    let navBar = document.getElementById('navBarAside');
    let navBarText = document.getElementById('navBarText');
    let navBarOptions = document.getElementById('navBar');
    let navBarLogo = document.getElementById('navBarLogo');
    let menuIcon = document.getElementById("menuIcon");
    let socialMidiaIcon = document.getElementById("iconRedesSociais");

    if (navBar.classList.contains("closeNavBar")) {

        navBar.classList.remove('closeNavBar');
        navBarText.classList.remove('navBarItemOff');
        navBarOptions.classList.remove('navBarItemOff');
        navBarLogo.classList.remove('navBarItemOff');
        menuIcon.classList.remove('menuIconRight');
        socialMidiaIcon.classList.remove('navBarItemOff');


    } else {


        menuIcon.classList.add('menuIconRight');
        navBar.classList.add('closeNavBar');
        navBarText.classList.add('navBarItemOff');
        navBarOptions.classList.add('navBarItemOff');
        navBarLogo.classList.add('navBarItemOff');
        socialMidiaIcon.classList.add('navBarItemOff');

    }
};