let wordLetters     = ['F', 'O', 'X'];
let guessedLetters  = ['_', '_', '_'];

function predictLetter(value) {
    let correctGuess = false;
    let moreToGuess = false;
    for (var i = 0; i < wordLetters.length; i++) {
        if (wordLetters[i] == value) {
            guessedLetters[i] = value;
            correctGuess = true;
        }
        if (guessedLetters[i] == '_') {
            moreToGuess = true;
        }
    }
    if (correctGuess) {
        console.log('Yay, you found a letter!');
        console.log(guessedLetters.join(''));
        if (!moreToGuess) {
            console.log('YOU WON!');
        } 
    } else {
        console.log('Oh noes, thats not right!');
    }
}

predictLetter('f');
predictLetter('O');
predictLetter('O');
predictLetter('X');
predictLetter('F');
