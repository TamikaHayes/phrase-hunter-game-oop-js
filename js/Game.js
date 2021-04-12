/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
        this.randomPhrase = this.getRandomPhrase();
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
        phrases = this.phrases;
        let randomNum = Math.floor(Math.random()*(phrases.length));
        let randomPhrase = phrases[randomNum];
        return randomPhrase;
    }
    //getRandomPhrase(phrases);
}