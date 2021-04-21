/** Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Tamika Hayes
 * April 18, 2021
 * Game.js 
 */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
/**
 * Creates phrases for use in game
 * @return  {array}    An array of phrases that could be used in the game
 */
    createPhrases() {
        const phrases = [
            new Phrase('Mork and Mindy'),
            new Phrase('Good Will Hunting'),
            new Phrase('Mrs Doubtfire'),
            new Phrase('Dead Poets Society'),
            new Phrase('Good Morning Vietnam')
        ];

        return phrases;
    }

/**
 * Selects random phrase from phrases property
 * @return  {Object}    Phrase object chosen to be used
 */
    getRandomPhrase(phrases) {
        const gamePhrases = this.phrases;
        const randomIndex = Math.floor(Math.random()*(gamePhrases.length));
        const randomPhrase = gamePhrases[randomIndex];
        return randomPhrase;
    }

/**
 * Begins game by selecting a random phrase and displaying it to user
 * The random phrase is a Phrase object
 */
    startGame() {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';
        //set the activePhrase property to a random phrase
        this.activePhrase = this.getRandomPhrase();
        //console.log(this.activePhrase);
        //call the addPhraseToDisplay() method (which is in the Phrase class) on the active phrase
        this.activePhrase.addPhraseToDisplay();

    }

/**
 * Handles onscreen keyboard button clicks
 * @param (HTMLButtonElement) button - The clicked button element
 * Handles logic and branching for user interactions with the game
 */   
    handleInteraction(button) {
        //console.log(button);
        //disable selected letter's onscreen keyboard button
        button.classList.add('disabled');
        if (this.activePhrase.checkLetter(button.textContent)) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button.textContent);
                if (this.checkForWin()) {
                    this.gameOver(true);
                }
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }

    }

/**Checks for winning move
 * @return {boolean} True if game has been won, false if game wasn't won
 */
    checkForWin() {
        //check to see if any hidden letters are on the game board; if no hidden letters, return true
        const hiddenLetters = document.querySelectorAll('.hide');
        return (!hiddenLetters.length);
    }

/**
 * Increases the value of the missed property
 * Removes a life from the scoreboard
 * Checks if player has remaining lives and ends game if player is out of lives
 */
    removeLife() {
        this.missed++;
        //console.log(this.missed);
        let heart = document.querySelector("img[src='images/liveHeart.png']");
            if (this.missed <= 4) {
                heart.src = 'images/lostHeart.png';
            }  else if (this.missed > 4) {
                this.gameOver(); 
            }   
    }
/**
 * Displays game over message
 * @param {boolean} gameWon - Whether or not the user won the game
 */
    gameOver(gameWon) {
        const overlay = document.querySelector('#overlay');
        let message = document.querySelector("#game-over-message");
        overlay.style.display = 'flex';
        if (this.checkForWin() === true) {
            gameWon === true;
            message.textContent = "Great job! You're a phrase champion!"
            overlay.classList.add('win');
            //remove overlay color from any previous round of the game
            overlay.classList.remove('lose');
            this.resetGame();
        } else {
            gameWon === false;
            message.textContent = "Sorry, better luck next time!"
            overlay.classList.add('lose');
            //remove overlay color from any previous round of the game
            overlay.classList.remove('win');
            this.resetGame();
        }
    }

/**
 * Resets game
 * Removes all <li> elements from Phrase <ul> element
 * Enables all onscreen keyboard buttons, and updates each with 'key' CSS class (removing 'chosen' or 'wrong' CSS class)
 * Resets all heart images for scoreboard to display 'liveHeart.png' image
 */
    resetGame() {
        const finishedGamePhrase = document.querySelectorAll('#phrase li');
        //console.log(finishedGamePhrase);
        finishedGamePhrase.forEach(li => {
            li.parentNode.removeChild(li);
        });
        

        let finishedGameKeys = document.querySelectorAll('#qwerty button');
        //console.log(finishedGameKeys);
        finishedGameKeys.forEach(button => {
            button.classList.remove('disabled');
            button.classList.remove('chosen');
            button.classList.remove('wrong');
        });

        
        const resetHearts = document.querySelectorAll('.tries img');
        for (let i = 0; i < resetHearts.length; i++) {
            resetHearts[i].setAttribute('src', 'images/liveHeart.png');
        }

    }

 }