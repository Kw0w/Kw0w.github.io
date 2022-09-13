//VARIABLES
const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

//Flip card
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.toggle("flip");

    if (!hasFlippedCard) {
        //First click
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    //Second Click
    secondCard = this;

    //Do cards match
    checkForMatch();
}

//Check for match
function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unFlipCards();
}

//Disable card
function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
}

//Unflip card
function unFlipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        resetBoard();
    }, 1500)
}

//Reset board
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

//Shuffle board
(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener("click", flipCard));

//Reset game
function resetGame() {
    window.location.reload();
}