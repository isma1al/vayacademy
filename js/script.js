const anchors = document.querySelectorAll('.menu__list-link');



const body = document.querySelector('body');
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');

hamburger.addEventListener('click', () => {
    menu.classList.add('menu--active');
    body.classList.add('scroll-hidden');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('menu--active');
    body.classList.remove('scroll-hidden');

});

anchors.forEach(link => {
    link.addEventListener('click', (e) => {
        body.classList.remove('scroll-hidden');
        e.preventDefault();
        menu.classList.remove('menu--active');
        const blockId = link.getAttribute('href');
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth",
            block: 'start'
        });
    });
});