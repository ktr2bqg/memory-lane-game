/*------Constants------*/ 
const cardEls = document.querySelectorAll('.cards')
const resetBtn = document.getElementById('reset')
const messageEl = document.querySelector('h2')



/*------Variables------*/
let board;
let winner;
let cards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let turn = 1;
/*------Cached Element References------*/

/*------Event Listeners------*/
cardEls.forEach((cardEl) => {
    console.log(cardEl.id);
    console.log(parseInt(cardEl.id) +1);
    //console.log(cards[cardEl.id]);
    cardEl.className = `cards back ${cards[cardEl.id]}`;
    cardEl.addEventListener("click", handleClickCard);
})
/*------Functions------*/
init()

function init() {
    cards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    turn = 1;
    winner = false;
    render()
};

function render() {  
}
 
function handleClickCard(event) {
    if (turn === 1) {
        selectedCard1 = playingCards[cardEls.id]
        return turn = 2
    } else {
        selectedCard2 = playingCards[cardEls.id]
        return turn = 1
    }
}