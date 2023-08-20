const button = document.querySelector('button');
const input = document.querySelector('input');
const inCorrect = document.querySelector('.inCorrect');
const GuessCount = document.querySelector('.GuessCount');
let guessCount = 0;
let answer = Math.floor(Math.random()*100)+1;

button.addEventListener('click',()=>{

    if(input.value < 0 || input.value > 100 || isNaN(input.value)){
       inCorrect.innerText = 'Guess a number between 1 to 100 only';
       input.value = '';
    }
    else{
        if(input.value < answer){
            inCorrect.innerText = 'You guess are too Low!';
            input.value = '';
        } else if(input.value > answer){
            inCorrect.innerText = 'You guess are too High!';
            input.value = '';
        } else{
            inCorrect.innerText = 'Congratulation, You guess Correct';
            setTimeout(ResetGame,5000);
        }
        guessCount++;
        GuessCount.innerHTML = `No. of Guess: ${guessCount}`;
    }
})

function ResetGame(){
    answer = Math.floor(Math.random()*100)+1;
    guessCount = 0;
    input.value = '';
    inCorrect.innerText = '';
    GuessCount.innerHTML = `No. of Guess: ${guessCount}`;
}





