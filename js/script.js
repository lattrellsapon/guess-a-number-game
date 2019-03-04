let userScoreDiv = document.getElementById('user-score');
let userScore = 0;
let userMessageDiv = document.getElementById('user-message');

const scoreBoardDiv = document.getElementById('score-board');

const userAnswerDiv = document.getElementById('userAnswer');



// This function produces a random number 

function getRandomNumber()
{
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    return randomNumber;
}

// This function resets the user answer 

function resetUserAnswer()
{
    document.getElementById('userAnswer').value = ' ';
}

// This function processeses the user answer

function processAnswer()
{
    // Gets the user input 

    let userAnswer = document.getElementById('userAnswer').value;
    console.log(`User Input: ${userAnswer}`);

    // Gets the random number

    let randomNumber = getRandomNumber();

    console.log(randomNumber);

    if(userAnswer == "")
    {
        userMessageDiv.innerHTML = 'Please enter in a number.';
    }
    else if(userAnswer == randomNumber)
    {
        userMessageDiv.innerHTML = 'You got it right !';
        userScore++;
        userScoreDiv.innerHTML = userScore;
        resetUserAnswer();
    }
    else 
    {
        userMessageDiv.innerHTML = 'You got it wrong !';
        resetUserAnswer();

    }
    

   
}