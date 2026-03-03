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
    clickDisplay.innerText = "Clicks: " + clicks;

    // detect if 
    if (clicks == 10) {
        alert("Congratulations you reached the next level you now do 2 per click now!");
        //
        clicks = clicks + 2;
    }
    }

