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
const scaleFactor = 230; 

//array of gifs
const gifs = ["./assets/images/kuromi-sad1.gif", "./assets/images/kuromi-sad2.gif", "./assets/images/kuromi-sad3.gif"];
//array of messages
const buttonMessages = ["Are you sure?", "Really?", "Please?", "Please please please"];

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

    // increase the size of the yes button
    if (yesScale < largestYesScale) {
        yesScale += 0.2;
        yesButton.style.transform = `scale(${yesScale})`;

    // adjust gap of buttons dynamically
    // access computed css gap property from button container
    const computedStyle = getComputedStyle(buttonContainer);
    const currentGap = parseFloat(computedStyle.gap);
    
    // Calculate new gap with square root scaling
    let newGap = Math.sqrt(currentGap * scaleFactor);
    
    // update new gap to be current gap
    buttonContainer.style.gap = `${newGap}px`;
    }
    
    // increment the number of clicks
    clicks++;
});
