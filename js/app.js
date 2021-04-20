/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



let game;

const startButton = document.querySelector('#btn__reset');

startButton.addEventListener('click',(e) => {
    game = new Game();
    game.startGame();
});

const keyboard = document.querySelector('#qwerty').addEventListener('click', (e) => {
    if (e.target.className === 'key') {
        //console.log('Click!');
        game.handleInteraction(e.target);
    }
    
});
    

