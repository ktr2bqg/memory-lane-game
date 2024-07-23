/*------Constants------*/ 




/*------Variables------*/
let board;
let winner;
/*------Cached Element References------*/


/*------Event Listeners------*/



/*------Functions------*/
init();

// caches all of the card elements in a variable
const cardEls = document.querySelectorAll('cards')
const resetBtn = document.getElementById('reset')
const messageEl = document.querySelector('h2')

// adds an event listener to each card element
cardEls.forEach(cardEl => {
  cardEl.addEventListener('click', handleClickCard)
})

// declare a state variable to hold the info regarding the cards
let cards = 
    [ "1","2","3","4","5",
    "6","7","8", "9","10",]

init()

function init() {
 cards = 
    [ "1","2","3","4","5",
    "6","7","8", "9","10",]
    turn = "";
    winner = false;
    render()
};

function render() {
  cardEls.forEach(cardEl => {
    // code to change the cardEl (HTML) to reflect the state in cardVals
  })
}

function handleClickCard() {
  // user interaction changes state of cardVals in some way
  // then renders the updated state
  render()
}


