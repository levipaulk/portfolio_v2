function navClassToggle() {
    const navs = document.querySelectorAll('.Navbar__Items');
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

// function meClassToggle() {
//     const mes = document.querySelectorAll('.me');
//     mes.forEach(me => me.classList.toggle('hide-me'));
// }

document.querySelector('.Navbar__Link-toggle').addEventListener('click', navClassToggle);
// document.querySelector('.bio-wrapper').addEventListener('mouseover', meClassToggle);