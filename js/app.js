/*------Constants------*/ 




/*------Variables------*/
let board;
let winner;
/*------Cached Element References------*/
const cardEls = document.querySelectorAll('cards')
const resetBtn = document.getElementById('reset')


/*------Event Listeners------*/



/*------Functions------*/
init();

function init() {
  board = 
    [ "","","","","",
    "","","", "","",]
    turn = "";
    winner = false;
    render()
};

function updateBoard()