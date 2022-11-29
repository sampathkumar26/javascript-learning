'use strict';

// console.log( document.querySelector( '.message' ).textContent );
// document.querySelector( '.message' ).textContent = "🎉 Correct Number";
// console.log( document.querySelector( '.message' ).textContent );

// document.querySelector( '.score' ).textContent = 10;
// document.querySelector( '.number' ).textContent = 13;

// document.querySelector( '.guess' ).value = 23;
// console.log( document.querySelector( '.guess' ).value );

let secreteNumber = Math.trunc(Math.random()*20)+ 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector( '.message' ).textContent = message;
};



document.querySelector( '.check' ).addEventListener( 'click', function () {

    const guess = Number( document.querySelector( '.guess' ).value );
    console.log( guess, typeof guess );
    
    if ( !guess ) {
        displayMessage("⛔ No Number!!");
    }
    else if ( guess === secreteNumber ) {
        document.querySelector( '.number' ).textContent = secreteNumber;
        displayMessage("🎉 Correct Number");
        document.querySelector( 'body' ).style.backgroundColor = '#60b347'; 
        document.querySelector( '.number' ).style.width = '30rem';
        if (score!=0 && score>highScore) {
            highScore = score;
            document.querySelector( '.highscore' ).textContent = score;
        }
    }
        
    else if ( guess !== secreteNumber ) {
        
        if ( score > 1 ) {
            score--;
            let message = document.querySelector( '.message' ).textContent = guess > secreteNumber ? "📈 Too High!!" : "📉 Too low!!";

            displayMessage( message );
            
            document.querySelector( '.score' ).textContent = score;
        }
        else {
            displayMessage("💥 You lose the game");
            document.querySelector( '.score' ).textContent = 0;
        }
        }
} );


document.querySelector( '.again' ).addEventListener( 'click', function () {
    score = 20;
    secreteNumber = Math.trunc(Math.random()*20)+ 1;
    displayMessage("Start guessing...")
    document.querySelector( '.score' ).textContent = score;
    document.querySelector( '.number' ).textContent = '?';
    document.querySelector( '.guess' ).value = '';

    document.querySelector( 'body' ).style.backgroundColor = '#222'; 
    document.querySelector( '.number' ).style.width = '15rem';
});





