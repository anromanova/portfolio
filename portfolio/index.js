console.log(
    "Привет! :) \n(45/48) Вёрстка соответствует макету. Ширина экрана 768px (частично выполнена секция Video) \n(15/15) Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется \n(22/22)На ширине экрана 768рх и меньше реализовано адаптивное меню\n(82/85)=>75\nСпасибо за проверку!"
)

const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message',
      'placeholder-email': 'E-mail',
      'placeholder-phone': 'Phone',
      'placeholder-message': 'Message',
      'standard' : 'Standard',
      'premium' : 'Premium',
      'gold' : 'Gold',
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'placeholder-email': 'Почта',
      'placeholder-phone': 'Телефон',
      'placeholder-message': 'Сообщение',
      'send-message': 'Отправить',
      'standard' : 'Базовый',
      'premium' : 'Премиум',
      'gold' : 'Золотой',
    }
  }
//   export default i18Obj;

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

//Language switchers

const lang = document.querySelectorAll('[data-i18]');
const russianLanguage = document.querySelector('.ru');
const englishLanguage = document.querySelector('.en');
const buttonLanguages = document.querySelector('.button-switcher')

const currentLang = localStorage.getItem('lang');


russianLanguage.addEventListener('click', () => getTranslate('ru'));
englishLanguage.addEventListener('click', () => getTranslate('en'));

function getTranslate(language) {
    lang.forEach((element) => {element.textContent = i18Obj[language][element.dataset.i18];
        if (element.placeholder) {
            element.placeholder = element.input = i18Obj[language][element.dataset.i18];}}
    )
      }

// function setLocalStorage() {
//     localStorage.setItem('lang', lang);
//       }
  
//     window.addEventListener('beforeunload', setLocalStorage)

// function getLocalStorage() {
//       if(localStorage.getItem('lang')) {
//         const lang = localStorage.getItem('lang');
//         getTranslate(lang);
//       }
//     }

//     window.addEventListener('load', getLocalStorage)

// function toggleLanguage(event) {
//     buttonLanguages.forEach((a) => a.classList.remove('active'));
//     event.target.classList.toggle('active');
//     event.target.classList.add('active');
//   }

//   russianLanguage.addEventListener('click', toggleLanguage);
//   englishLanguage.addEventListener('click', toggleLanguage);


// Theme switcher

const toggleBtn = document.querySelector('.theme-logo-link');
const theme = document.querySelector('html');
const currentTheme = localStorage.getItem('theme-logo');


function changeTheme(name) {
  theme.setAttribute('data-theme', name);
  localStorage.setItem('theme', name);
  localStorage.setItem('theme-logo', name);
  toggleBtn.classList.toggle('moon');

}

if (currentTheme === 'light-theme') {
  theme.setAttribute('data-theme', currentTheme)
  // toggleBtn.classList.add('moon')
} else {
  changeTheme('dark-theme')
  toggleBtn.classList.add('moon')
}


toggleBtn.addEventListener('click', () => {
  if (theme.getAttribute('data-theme') === 'dark-theme') {
    changeTheme('light-theme')
  }
  else {
    changeTheme('dark-theme')
  }
});


// function changeTheme() {
//     if(document.documentElement.hasAttribute('theme')){
//         document.documentElement.removeAttribute('theme');
//     }
//     else{
//         document.documentElement.setAttribute('theme', 'light-theme');
//     }
// };