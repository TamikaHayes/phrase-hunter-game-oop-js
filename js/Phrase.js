/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

/**
 * Display phrase on game board
 */
    addPhraseToDisplay() {
        //select phrase div to insert phrase in HTML
        const phraseDiv = document.querySelector('#phrase');
        //create empty string to add a class to every letter and space of the phrase
        const phraseAsCharacters = this.phrase.split('');
        console.log(phraseAsCharacters);
        return phraseAsCharacters;

    

    }
}