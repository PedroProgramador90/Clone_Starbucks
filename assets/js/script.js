var menuBar = document.querySelector('.menu-mobile .menu-image');
var menuMobile = document.querySelector('.menu-mobile ul');

menuBar.addEventListener('click', (e) => {
    e.preventDefault();
    menuMobile.classList.toggle('show-menu');
});