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

// keyboard interaction/ addEventListener
const keyboard = document.querySelector('#qwerty').addEventListener('click', (e) => {
    if (e.target.className === 'key') {
        console.log('Click!');
        game.handleInteraction(e.target);
    }
    
});
    


//resetting the game - clicking Start Gane button loads a new game
//add or change class names, restore hearts, remove phrase