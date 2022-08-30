'use strict'

// Verlinkung der Elemente
const startButton = document.querySelector('.startGameButton');
const beschreibung = document.querySelector('.beschreibung');
const secretNumber = document.querySelector('.secretNumber');
const allNumbers = document.querySelector('.allNumbers');
const selectedNumber = document.querySelectorAll('.number');
const currentScore = document.querySelector('.currentscore');
const currentHightScore = document.querySelector('.highscore');

secretNumber.style.display = 'none';
allNumbers.style.display = 'none';
let randomNumber = 0;
currentScore.textContent = '20';
currentHightScore.textContent = 'highScore: 0';

// Wenn der start Button geklickt wird, verschwindet die Startmaske und die Game
// Maske wird geoeffnet
startButton.addEventListener('click', function () {
    beschreibung.style.display = 'none';
    startButton.style.display = 'none';
    secretNumber.style.display = 'block';
    allNumbers.style.display = 'block';
    randomNumber = Math.floor(Math.random() * (20 - 1) + 1);
    console.log(randomNumber);
});

for(let i = 0; i < selectedNumber.length;i++) {
    selectedNumber[i].addEventListener('click', function(){
        let number = selectedNumber[i].textContent;
        console.log(selectedNumber[i].textContent);
        let result = gussedNumber(number);

        if (result == 1) {
            alert('die gesuchte Zahl ist groesser');
            let cScore = Number(currentScore.textContent);
            cScore -= 1;
            currentScore.textContent = cScore;
            selectedNumber[i].style.backgroundColor = 'red';
        } else if (result == 2) {
            selectedNumber[i].style.backgroundColor = 'red';
            let cScore = Number(currentScore.textContent);
            cScore -= 1;
            currentScore.textContent = cScore;
            alert('die gesuchte Zahl ist kleiner');
        } else if (result == 0) {
            selectedNumber[i].style.backgroundColor = 'green';
            currentHightScore.textContent = 'highScore: '+currentScore.textContent;
            alert('gewonnen');
        }
    });
}



function gussedNumber (guessedNumber) {
    if (guessedNumber < randomNumber) {
        // wenn gesuchte Zahl kleiner ist dann 1
        return 1;
    } else if (guessedNumber > randomNumber) {
        return 2;
    } else {
        return 0;
    }
}

