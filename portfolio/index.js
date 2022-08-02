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

const videoPlayer = document.querySelector('.video-player');
const video = document.querySelector('.video');
const playButtonControl = document.querySelector('.play-ico');
const playButton = document.querySelector('.video-player-button');
const progress = document.querySelector('.progress-range');
const volume = document.querySelector('.volume-range');
const volumeButton = document.querySelector('.volume-ico');
const currentTimeElement = document.querySelector('.current-time');
const durationTimeElement = document.querySelector('.duration-time');
const control = document.querySelector('.controls');
const fullscreen = document.querySelector('.exp-ico')
  
// Play/Pause video function
function playVideo () {
        if(video.paused) {
            video.play()
            playButtonControl.classList.toggle('pause-ico');
            playButton.classList.toggle('video-player-button_hidden');
        } else {
            video.pause()
            playButtonControl.classList.toggle('pause-ico');
            playButton.classList.toggle('video-player-button_hidden');
        }
}

// Show current time and video duration
function currentTime () {
    let currMin = Math.floor(video.currentTime / 60)
    let currSec = Math.floor(video.currentTime - currMin * 60)
    let durMin = Math.floor(video.duration / 60)
    let durSec = Math.floor(video.duration - durMin * 60)

    currentTimeElement.innerHTML = `${currMin}:${currSec < 10 ? '0'+currSec : currSec}` 
    durationTimeElement.innerHTML = `${durMin}:${durSec < 10 ? '0'+durSec : durSec}`
}

// Сhange the video with the slider
function rangeVideo () {
  const value = ((video.currentTime / video.duration)* 100);
  progress.value = value;
  progress.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value}%, #9b9e9f ${value}%, #9b9e9f 100%)`
}

// Сhange the video progress bar with the slider 
function rangeProgressBar (e) {
  const progressTime = (e.offsetX / progress.offsetWidth)*video.duration;
  video.currentTime = progressTime;
}

// Сhange the sound with the slider
function rangeVolume () {
      const value = this.value;
      this.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value*100}%, #9b9e9f ${value*100}%, #9b9e9f 100%)`
      video.volume = value;
      if (video.volume === 0) {
        volumeButton.classList.remove('volume-ico');
        volumeButton.classList.add('mute-ico');
      }
      else {
        volumeButton.classList.remove('mute-ico');
        volumeButton.classList.add('volume-ico');
      }
}

// mute function
function muteVolume () {
    if (video.volume === 0) {
        video.volume = 0.4;
        volume.value = video.volume;
        volumeButton.classList.toggle('volume-ico');
        volumeButton.classList.toggle('mute-ico');
      }
      else {
        video.volume = 0;
        volume.value = video.volume;
        volume.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${0}%, #9b9e9f ${100}%, #9b9e9f 100%)`
        volumeButton.classList.toggle('mute-ico');
        volumeButton.classList.toggle('volume-ico');
      }
}

//fullscreen function
function fullscrn () {
  if (!document.fullscreenElement) {
    videoPlayer.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

video.addEventListener('timeupdate', rangeVideo);
video.addEventListener('click', playVideo);
video.addEventListener('timeupdate', currentTime);
playButtonControl.addEventListener('click', playVideo);
playButton.addEventListener('click', playVideo);
volume.addEventListener('mousemove', rangeVolume);
volumeButton.addEventListener('click', muteVolume);
progress.addEventListener('click', rangeProgressBar)
fullscreen.addEventListener('click',fullscrn);


let mousedown = false;
control.addEventListener('mousedown', () => mousedown = true);
control.addEventListener('mouseup', () => mousedown = false);