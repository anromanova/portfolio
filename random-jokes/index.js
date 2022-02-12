console.log(
    `Привет! :)
    (10/10) Вёрстка
    (10/10) При загрузке страницы приложения отображается рандомная цитата
    (10/10) При перезагрузке страницы цитата обновляется (заменяется на другую)
    (10/10) Есть кнопка, при клике по которой цитата обновляется (заменяется на другую)
    (10/10) Смена цитаты сопровождается любым другим эффектом
    (10/10) Можно выбрать один из двух языков отображения цитат: en/ru или en/be
    Спасибо за проверку!`
)

const url = 'https://type.fit/api/quotes';
const quotes_ru = 'quots.json';
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const button = document.querySelector('.button');
const buttonLang = document.querySelectorAll('.lang');
const buttonRu = document.querySelector('.ru');
const buttonEng = document.querySelector('.eng');
const backgroundColor = document.querySelectorAll('.color');

let colors = ['#5552FF', '#FCC526', '#4BBEF2', 
                '#66DFBC', '#3DC39B', '#FFE9A8',
                '#FFE975', '#f3c4c4', '#79CAFB',
                '#FE74A6', '#928CF8', '#5B6DFF']



buttonEng.addEventListener('click', getData_eng)

buttonRu.addEventListener('click', getData_ru)

async function getData_eng() {
    buttonEng.classList.add('active');
    buttonRu.classList.remove('active');
    const response = await fetch(url);
    const data = await response.json();
    return (showData(data));
}

async function getData_ru() {
    buttonRu.classList.add('active');
    buttonEng.classList.remove('active');
    const response = await fetch(quotes_ru);
    const data = await response.json();
    return (showData(data));
}

function check() {
    const isPlay =  buttonRu.classList.contains('active');
    if (isPlay){
        getData_ru()
    } else {
        getData_eng()
}}

// random number from array
function getRandomInt(min, max) {
    min = Math.ceil(0);
    max = Math.floor(100);
    return Math.floor(Math.random() * (max - min)) + min;
}

function showData(data) {
    n = getRandomInt();
    let quote_author = author.textContent;
    let quote_text = quote.textContent;
    author.textContent =  data[n].author;
    quote.textContent = data[n].text;
    if (author.textContent === 'null') {
        return `${quote_text}`
    } else {
        return (`${quote_author} ${quote_text}`)
    }

}

// change background color
function randomColor () {
    let num = Math.floor((Math.random()*colors.length));
    let newColor = colors[num];
    return document.body.style.background = newColor;
}

window.addEventListener('load', getData_eng);
window.addEventListener('load', randomColor);
button.addEventListener('click', check);
button.addEventListener('click', randomColor);