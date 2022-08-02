let cardsArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8,];
let resultsArray = [];
let firstCard;
let secondCard;
let matchedPare = 0;
let flipsGame = 0;
let disable = false;
const cards = document.querySelectorAll('.card');
const finish = document.querySelector('.hidden');
const results = document.querySelector('.results-list');
let score = document.querySelector('.score-list');
const flips = document.querySelectorAll('.flips-count');
const btnNewGame = document.querySelector('.btn-refresh');
const btnClose = document.querySelector('.close');
const btnResults = document.querySelector('.btn-score');


function getResults () {
   const resultLS = localStorage.getItem('results')
   if (resultLS) {
       resultsArray = JSON.parse(resultLS)
   }
}

function newGame() {
    finish.classList.add('hidden');
    cardsArray.sort(() => Math.random() > 0.5 ? 1 : -1);
    firstCard = secondCard ='';
    disable = false;
    matchedPare = 0;
    flipsGame = 0;
    flips.forEach(flip => {
        flip.innerText =  '0';
    });
    cards.forEach((card, num) => {
        card.classList.remove('flip');
        let imgView = card.querySelector('img');
        imgView.src = `./assets/svg/${cardsArray[num]}.svg`;
        })
    cards.forEach(card => { card.addEventListener('click', flipCard)})
}

function finishedGame() {
    setTimeout(()=> {
        finish.classList.remove('hidden');
    }, 500)
}

function checkResults() {
    results.classList.toggle('hidden-result');
}

function showResults() {
    score.textContent = '';
        resultsArray.forEach(game => score.innerHTML += `<li>${game}</li>`)
}

function matchCards(view1, view2) {
    if(view1 === view2) {
        matchedPare++;
        if (matchedPare === 8) {
            if (resultsArray.length > 9) {
                resultsArray.shift(`Your score is ${flipsGame} flips`) 
            }
            resultsArray.push(`Your score is ${flipsGame} flips`)
            localStorage.setItem('results', JSON.stringify(resultsArray))
            return finishedGame(), resultsArray
        }
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        firstCard = secondCard = '';
        
        disable = false;
    }
    else {
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            firstCard = secondCard = '';
            disable = false;
        }, 800)
    }
}

function flipCard(e) {
    let clickedCard = e.target;
    if (clickedCard !== firstCard && !disable) {
        flipsGame++;
        flips.forEach(flip => {
            flip.innerText = flipsGame;
        });
        clickedCard.classList.add('flip');
        if (!firstCard) {
            return firstCard = clickedCard;
        }
        secondCard = clickedCard;
        disable = true;
        const firstCardView = firstCard.querySelector('img').src;
        const secondCardView = secondCard.querySelector('img').src;
        matchCards(firstCardView, secondCardView);
    }
    return flipsGame
}

getResults()
newGame()

btnNewGame.addEventListener('click', newGame)
btnClose.addEventListener('click', checkResults)
btnResults.addEventListener('click', checkResults)
btnResults.addEventListener('click', showResults)