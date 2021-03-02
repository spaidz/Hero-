alert("This is working");

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

//Mobile viwe
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);