console.log("Script started");

// Variable to track the number of clicks
let clicks = 0;

// Variable to store the click dispplay h1
let clickDisplay = document.getElementById("click-display");

// Set initial text
clickDisplay.innerText = "Clicks: " + clicks;

// Called when the potato is clicked 
function handleClick() {
    console.log("click");

    // add one to click count
    clicks = clicks + 1;

    // update display
    ckickDisplay.innerText = "Clicks: " + clicks;
}

