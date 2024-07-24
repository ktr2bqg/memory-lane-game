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

/*------Functions------*/
init();

function init() {
  cards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  winner = false
  turn = 0;
}
console.log(cards);

function render() {}
render();

function compareCards() {}
compareCards();

function clickCard() {
}
clickCard();

/*------Event Listeners------*/
playBtn.addEventListener('click', function() {
    console.log('Button was clicked!')
})
playBtn.click()

cardsEls.forEach((cardEl) => {
  //console.log(cardEl.id);
  //console.log(parseInt(cardEl.id) + 1);
  //console.log(cards[cardEl.id]);
  cardEl.className = `cards back ${cards[cardEl.id]}`;
  cardEl.addEventListener("click", function() {
    console.log('Card was Clicked!')
    })
})
