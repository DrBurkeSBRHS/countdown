// --- Define Target Dates and Labels ---

// Target Date 1: Example - End of the year 2025
const targetDate1 = new Date("May 30, 2025 02:05:00").getTime();
const label1 = "Last Day for Seniors";

// Target Date 2: Example - One month from the current context date (May 2, 2025 -> June 2, 2025)
const targetDate2 = new Date("June 23, 2025 02:05:00").getTime();
const label2 = "Last Day of School";

// Target Date 3: Example - Start of 2026
const targetDate3 = new Date("August 27, 2025 07:25:00").getTime();
const label3 = "School Begins Again Next Year";

// Add this line at the very beginning to confirm the script is running
console.log("script.js started!");

// --- Function to Calculate and Format Time Remaining ---

function calculateTimeRemaining(targetTime) {
    const now = new Date().getTime();
    const difference = targetTime - now;

    // Check if the countdown is finished
    if (difference < 0) {
        return "Countdown finished!";
    }

    // Calculate time units
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Format the output string
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}


// --- Function to Update a Single Countdown Display ---

function updateCountdownDisplay(labelElementId, valueElementId, targetTime, labelText) {
    const labelElement = document.getElementById(labelElementId);
    const valueElement = document.getElementById(valueElementId);

    // Add this line to see which elements it's trying to update
    console.log("Attempting to update:", labelElementId, valueElementId);

    if (labelElement && valueElement) {
        // Set the label text initially (or on each update)
        labelElement.textContent = labelText;

        // Calculate and set the countdown value
        const timeRemaining = calculateTimeRemaining(targetTime);
        // Add this line to see the calculated value
        console.log("Calculated time remaining:", timeRemaining);
        valueElement.textContent = timeRemaining;
    } else {
        console.error(`Error: Could not find elements with IDs ${labelElementId} or ${valueElementId}`);
    }
}

// --- Function to Update All Countdowns ---

function updateAllCountdowns() {
    // Add this line to see if the main update function is called
    console.log("updateAllCountdowns called");
    updateCountdownDisplay('countdown1-label', 'countdown1-value', targetDate1, label1);
    updateCountdownDisplay('countdown2-label', 'countdown2-value', targetDate2, label2);
    updateCountdownDisplay('countdown3-label', 'countdown3-value', targetDate3, label3);
}

// --- Initial Call and Interval ---

// Update immediately when the page loads
updateAllCountdowns();

// Update every second
setInterval(updateAllCountdowns, 1000);