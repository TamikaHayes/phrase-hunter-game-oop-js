/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */




const game = new Game();


// const game = new Game();


// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();

game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);