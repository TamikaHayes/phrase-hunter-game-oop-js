# phrase-hunter-game-oop-js
 This browser-based word guessing game, "Phrase Hunter," uses JavaScript and OOP(Object-Oriented Programming) to select a random, hidden phrase. Similar in format to the game show "Wheel of Fortune," the player attemptss to guess the phrase by clicking letters on an onscreen keyboard.

Rules of the Game:

--The player’s goal is to guess all the letters in a hidden, random phrase. At the beginning, the player only sees the number of letters and words in the phrase, represented by blank boxes on the screen. The player begins with five onscreen hearts, representing five available "tries."

--The player clicks an onscreen keyboard to guess letters in the phrase.

--The letter is disabled on the onscreen keyboard and a player can't select that letter again.

--If the selected letter is in the phrase at least once, the letter and its position in the phrase is highlighted on screen. All instances of the letter are made visible (so if there are 3 A's, all of the A's in the phrase appear at once).

--If the selected letter is not in the phrase, one of the player's hearts in the scoreboard is changed from a "live" heart to a "lost" heart.

--The player keeps choosing letters until they reveal all the letters in the phrase, or they make five incorrect guesses.