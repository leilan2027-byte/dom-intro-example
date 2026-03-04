console.log("Script started");

// Variable to track the number of clicks
let clicks = 0;
let clickValue = 1;

// Variable to store the click dispplay h1
let clickDisplay = document.getElementById("click-display");

//
levelDisplay = document.getElementById("level-display")

// Set initial text
clickDisplay.innerText = "Clicks: " + clicks;

// Called when the potato is clicked 
function handleClick() {
    console.log("click");

        // add one to click count
        clicks = clicks + clickValue;

        // update display
        clickDisplay.innerText = "Clicks: " + clicks;

        // detect if 
        if (clicks == 10) {
        alert("Congratulations you reached the next level you now do 2 per click!");
        levelDisplay.innerText = "Level 2";
        clickValue = 2;
        
    }
    else if (clicks == 50) {
       alert("Congratulations you reached the next level you now do 5 per click!");
        levelDisplay.innerText = "Level 3";
        clickValue = 5; 
    }
    else if (clicks == 150) {
       alert("Congratulations you reached the next level you now do 15 per click!");
        levelDisplay.innerText = "Level 4";
        clickValue = 15;
}
}