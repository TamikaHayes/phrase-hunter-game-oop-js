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
    const phraseElement = document.querySelector('#phrase ul');
    for (let i = 0; i < this.phrase.length; i++) {
        const liPhrase = document.createElement('li');
        if (this.phrase[i] === ' ') {
            //console.log(this.phrase[i]);
            liPhrase.classList.add('space');
            liPhrase.textContent = this.phrase.charAt(i);
        } else {
            liPhrase.classList.add('hide') ;
            liPhrase.classList.add('letter');
            liPhrase.classList.add(`${this.phrase.charAt(i)}`);
            liPhrase.textContent = this.phrase.charAt(i);
        }
            phraseElement.append(liPhrase); 
            //console.log(liPhrase);  
    }
    console.log(phraseElement);
    console.log(this.phrase);
    console.log(typeof this.phrase);
    console.log(this.phrase[0]);
    console.log(this.phrase.includes('a'));
    }
    
/**
 * Checks if passed letter is in phrase
 * @param   (string)    letter - Letter to check
 */
    checkLetter(letter) {  
        return (this.phrase.includes(letter)) 
        // for (let i = 0; i < this.phrase.length; i++) {
        //     if (this.phrase[i] === 'letter') {
        //         letter = true;
        //     } else {
        //         letter = false;
        //     }
        // }
    }

}



    