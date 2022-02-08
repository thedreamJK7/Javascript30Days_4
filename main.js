const menuToggle = document.getElementById('menu-toggle');
const body = document.querySelector('body');
const main = document.querySelector('main');
const mainNavList = document.querySelector('.main-nav-list');

menuToggle.addEventListener('click', ()=> {
    body.classList.toggle('active');
    main.classList.toggle('active');
    mainNavList.classList.toggle('active');
})