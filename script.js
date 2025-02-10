let clicks = 0;
const maxGifClicks = 3;
const maxButtonClicks = 4;
let noScale = 1;
const smallestNoScale = 0.5;
let yesScale = 1; 
const largestYesScale = 3;
const noButton = document.getElementById("no-btn");
const gif = document.getElementById("kuromi-gif");
const yesButton = document.getElementById("yes-btn");
const buttonContainer = document.querySelector(".btn-container");

//array of gifs
const gifs = ["./assets/images/kuromi-sad1.gif", "./assets/images/kuromi-sad2.gif", "./assets/images/kuromi-sad3.gif"];
//array of messages
const buttonMessages = ["Are you sure?", "Please?", "Please please please", "You can't do this to me!"];


// when the no button is clicked
noButton.addEventListener("click", () => {

    // changing images wrapping through from start to end of the array
    gif.src = gifs[clicks % maxGifClicks];

    // changing no button text messages wrapping through from start to end of the array
    noButton.textContent = buttonMessages[clicks % maxButtonClicks];
    

    // decrease the size of the no button
    if (noScale > smallestNoScale) {
        noScale -= 0.08;
        noButton.style.transform = `scale(${noScale})`;
    }

    // decrease the size of the no button
    if (yesScale < largestYesScale) {
        yesScale += 0.2;
        yesButton.style.transform = `scale(${yesScale})`;
    }

    // increment the number of clicks
    clicks++;
});
