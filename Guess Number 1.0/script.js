const input = document.getElementById('input');
const btn = document.querySelector('button');
const inCorrect = document.querySelector('.incorrect');
const guess = document.querySelector('.guess');

let answer = Math.floor(Math.random()*100)+1;

let numGuesses = 0;

btn.addEventListener('click',()=>{
    const data = input.value;

    if(data < 1 || data > 100 || isNaN(data)){
        inCorrect.innerText = 'Guess a number between 1 to 100';
        input.value = '';
    }
    else {
    numGuesses++;
    guess.innerHTML = `No. of Guess : ${numGuesses}`;
    
    if(answer < data){
        inCorrect.innerText = 'You Guess too High!';
        input.value="";
    }
    else if(answer > data){
        inCorrect.innerText = 'You Guess too Low!';
        input.value="";
    }
    else{
        inCorrect.innerText = 'Congratulations, You Guess Correct';
        setTimeout(() => {
            resetGame();
        }, 5000)
    }
    }
})

function resetGame(){
    numGuesses = 0;
    answer = Math.floor(Math.random()*100) + 1;
    input.value = '';
    guess.innerHTML = `No. of Guess : ${numGuesses}`;
    inCorrect.innerText = '';
}
