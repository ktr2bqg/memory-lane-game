/*------Constants------*/
const cardsEls = document.querySelectorAll(".cards");
console.log(cardsEls);
const messageEl = document.querySelector("h2");
console.log(messageEl);
const playBtn = document.getElementById("playBtn");
console.log(playBtn);

/*------Variables------*/
let winner;
console.log(winner);
let playerChoice;
console.log(playerChoice)
let cards;

/*------Functions------*/
init();

function init() {
  cards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  winner = false
  turn = '';
}
console.log(cards);

function render() {}
render();

function compareCards() {}
compareCards();

function clickCard(evt) {
       const cardIdx = parseInt(evt.target.id)
       console.log(cardIdx);
       showCard(cardIdx)
    }

function showCard(idx) {
    cardsEls[idx].classList.remove("facedown")
    cardsEls[idx].classList.add(cards[idx])
    cardsEls[idx].classList.add("faceup")
    cardsEls[idx].style.backgroundColor = 'red';
}

function flippedCard() {
  if (showCard === 'red') {
   } else 
  return 
}


function randomizeCards() {
 const randomIdx = Math.floor(Math.random() * cards.length);
   shuffledCards = cardsEls[randomIdx];
   console.log(shuffledCards)
}

/*------Event Listeners------*/
playBtn.addEventListener('click', function() {
    console.log('Button was clicked!')
})
playBtn.click()

cardsEls.forEach((cardEl) => {
  cardEl.addEventListener("click", clickCard);
});