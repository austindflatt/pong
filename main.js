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
let ballXVelocity = 5;
let ballYVelocity = 0;

// Update the pong world
function update() {

    // Update the computer paddle's position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

    // Update the player paddle's position
    playerPaddleYPosition = playerPaddleYPosition + playerPaddleYVelocity;

    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;
    if (computerPaddleYPosition <= 0 || computerPaddleYPosition >= 400) {
        computerPaddleYVelocity = computerPaddleYPosition + computerPaddleYVelocity * -1;
    }

    playerPaddle.style.top = `${playerPaddleYPosition}px`;
    if (playerPaddleYPosition <= 0 || playerPaddleYPosition >= 600) {
        playerPaddleYVelocity = playerPaddleYPosition + playerPaddleYVelocity * -1;
    }

    ballXPosition = ballXPosition + ballXVelocity;
    ballYPosition = ballYPosition + ballYVelocity;
    ball.style.top = ballYPosition + "px";
    ball.style.left = ballXPosition + "px";

    if (ballXPosition > 690) {
        ballXPosition = 350;
        ballYPosition = 250;
        ballYVelocity = ballYVelocity + 3;
    }
    if (ballXPosition > 490) {
        ballXPosition = 350;
        ballYPosition = 250;
        ballYVelocity = ballYVelocity + 3;
    }

/*     // Update the ball's velocity
    ballYVelocity = ballYVelocity - 0.05; */
}

// Call the update() function every 35ms
setInterval(update, 35);
