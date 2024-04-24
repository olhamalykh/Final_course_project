// Burger menu

const burgerMenuBtn = document.querySelector('.burger-menu-btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');

burgerMenuBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});




