console.log(
    "Привет! :) \n(45/48) Вёрстка соответствует макету. Ширина экрана 768px (частично выполнена секция Video) \n(15/15) Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется \n(22/22)На ширине экрана 768рх и меньше реализовано адаптивное меню\n(82/85)=>75\nСпасибо за проверку!"
)


//Adaptive menu 
const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav-list');
const links = document.querySelectorAll('.nav-link');

burger.addEventListener('click', toggleMenu);
[...links].forEach((link) => {
  link.addEventListener('click', toggleMenu);
})

function toggleMenu() {
  burger.classList.toggle('open');
  menu.classList.toggle('nav-list_active');
  
}
burger.addEventListener('click', toggleMenu);


//Portfolio button
const portfolioBtns = document.querySelector('.portfolio-buttons');
const portfolioBtn = document.querySelectorAll('.portfolio-button');
const portfolioImages = document.querySelectorAll('.portfolio-img');
const portfolioBtnActive = document.querySelector('.portfolio-button');


portfolioBtn.forEach(button => {button.addEventListener('click', changeImage)})
portfolioBtn.forEach(button => {button.addEventListener('click', changeClassActive)})

function changeImage(event) {
    let season = event.target.dataset.season;
    if(event.target.classList.contains('portfolio-button')) {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${season}/${index + 1}.jpg`);
    }
  }

  function changeClassActive(event) {
    portfolioBtn.forEach((button) => button.classList.remove('active'));
    event.target.classList.toggle('active');
    event.target.classList.add('active');
  }
