// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');

// player paddle
const playerPaddle = document.querySelector('.player-paddle');

// ball
const ball = document.querySelector('.ball');

// The y-velocity of the computer paddle
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 5;

// The y-velocity of the player paddle
let playerPaddleYPosition = 100;
let playerPaddleYVelocity = 5;

// The ball position
let ballXPosition = 350;
let ballYPosition = 250;
let ballXVelocity = Math.random() * 10;
let ballYVelocity = Math.random() * 10;

// Update the pong world
function update() {

    // Update the computer paddle's position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

    // Update the player paddle's position
    playerPaddleYPosition = playerPaddleYPosition + playerPaddleYVelocity;

    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;
    playerPaddle.style.top = `${playerPaddleYPosition}px`;
    if (computerPaddleYPosition <= 0 || computerPaddleYPosition >= 400) {
        computerPaddleYVelocity = computerPaddleYPosition + computerPaddleYVelocity * -1;
    }

    ballXPosition = ballXPosition + ballXVelocity;
    ballYPosition = ballYPosition + ballYVelocity;
    ball.style.left = `${ballXPosition}px`;
}

// Call the update() function every 35ms
setInterval(update, 35);
