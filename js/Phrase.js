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
        if (this.phrase.charAt(i) === ' ') {
            phraseElement.append('<li class="space">'  + this.phrase.charAt(i) + '</li>');
        } else {
            phraseElement.append('<li class="hide letter' + ` ${this.phrase.charAt(i)}">` + this.phrase.charAt(i) + '</li>');
        }

    }
    console.log(phraseElement);
    //phraseElement.innerHTML = ;
    return phraseElement;
    }

}


    // addPhraseToDisplay() {
    //     //select phrase div to insert phrase in HTML
    //     const ul = document.querySelector('#phrase ul');
    //     //create empty string to add a class to every letter and space of the phrase
    //     const phraseAsCharacters = this.phrase.split('');
    //     console.log(phraseAsCharacters);
    //     //loop through each character in the phrase
    //     for (let i = 0; i < phraseAsCharacters.length; i++) {
    //         //assign each iteration of the loop to the variable li
    //         const li = phraseAsCharacters[i];
    //         //create a new li element, assigned to the variable liPhrase
    //         const liPhrase = document.createElement('li');
            
    //         liPhrase.textContent = li;
    //         //console.log(li);
            

    //         if (li != '') {
    //             liPhrase.classList.add('hide');
    //             liPhrase.classList.add('letter');
    //             //liPhrase = `${liPhrase} + ${phraseAsCharacters[i]}`;
    //         } else if (li === '') {
    //             liPhrase.classList.remove('letter');
    //             liPhrase.classList.add('space');
    //         }
    //         console.log(liPhrase);

    //     //ul.innerHTML = `<li class="hide letter h">h</li>`;
    //     } 
        
    //     return liPhrase;
    // }

    