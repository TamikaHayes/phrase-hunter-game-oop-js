/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


// const game = new Game();

// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

let game;

const button = document.querySelector('#btn__reset');

button.addEventListener('click',(e) => {
    game = new Game();
    game.startGame();
});