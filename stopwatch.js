// Stopwatch functionality
document.addEventListener('DOMContentLoaded', function () {

    // Get DOM elements
    const timeDisplay = document.getElementById('time-display');
    const startBtn = document.getElementById('start-btn');
    const stopBtn = document.getElementById('stop-btn');
    const resetBtn = document.getElementById('reset-btn');

    // Stopwatch variables
    let currentTime = 0;
    let intervalId = null;
    let isRunning = false;

    // Constants
    const INCREMENT = 3; // Increment by 3 seconds
    const MAX_TIME = 30; // Maximum time in seconds

    // Function to format time display
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    // Function to update display
    function updateDisplay() {
        timeDisplay.textContent = formatTime(currentTime);
    }

    // Function to start stopwatch
    function startStopwatch() {
        if (isRunning) return;

        isRunning = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;

        intervalId = setInterval(function () {
            currentTime += INCREMENT;
            updateDisplay();

            // Stop automatically at 30 seconds
            if (currentTime >= MAX_TIME) {
                stopStopwatch();
                alert('Stopwatch reached maximum time of 30 seconds!');
            }

            console.log('Time updated:', currentTime, 'seconds');
        }, 1000);
        console.log('Stopwatch started');
    }

    // Function to stop stopwatch
    function stopStopwatch() {
        if (!isRunning) return;

        isRunning = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;

        clearInterval(intervalId);
        intervalId = null;

        console.log('Stopwatch stopped at:', currentTime, 'seconds');
    }

    // Function to reset stopwatch
    function resetStopwatch() {
        stopStopwatch();
        currentTime = 0;
        updateDisplay();

        // Reset button states
        startBtn.disabled = false;
        stopBtn.disabled = true;

        console.log('Stopwatch reset');
    }

    // Event listeners
    startBtn.addEventListener('click', startStopwatch);
    stopBtn.addEventListener('click', stopStopwatch);
    resetBtn.addEventListener('click', resetStopwatch);

    // Initialize stopwatch
    updateDisplay();
    stopBtn.disabled = true;

    console.log('Stopwatch initialized - increments by', INCREMENT, 'seconds, max time', MAX_TIME, 'seconds');
});