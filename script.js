// === 1. LIVE COUNTER LOGIC ===
function updateTimer() {
    // The date you two started (Sept 1, 2022)
    const startDate = new Date("September 1, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = now - startDate;

    // Time calculations
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    // Displaying the result in the #timer div
    const timerElement = document.getElementById("timer");
    if (timerElement) {
        timerElement.innerHTML = `${days}d : ${hours}h : ${mins}m : ${secs}s`;
    }
}
// Update the timer every 1 second
setInterval(updateTimer, 1000);

// === 2. PHASE 3.5: LOVE CHART REVEAL ===
function revealChart() {
    const btn = document.getElementById('reveal-btn');
    const chartWrapper = document.getElementById('love-chart-wrapper');

    if (btn && chartWrapper) {
        // Hide the analyze button
        btn.style.display = 'none';

        // Show the chart and caption
        chartWrapper.classList.remove('hidden');

        // Trigger a small burst of blue and green confetti
        confetti({
            particleCount: 60,
            spread: 70,
            origin: { y: 0.7 },
            colors: ['#4CAF50', '#2196F3']
        });
    }
}

// === 3. PHASE 4: THE INTERACTION ===
const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const winMessage = document.getElementById('win-message');
const mainQuestion = document.getElementById('main-question');

// The "No" button runs away
if (noBtn) {
    noBtn.addEventListener('mouseover', () => {
        // Calculate a random position within the browser window
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        
        noBtn.style.position = 'fixed'; // Overrides the CSS position
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });
}

// The "Yes" button click
if (yesBtn) {
    yesBtn.addEventListener('click', () => {
        // Trigger the confetti
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff4d6d', '#ff758f', '#ffffff']
        });

        // Hide the question and buttons
        if (mainQuestion) mainQuestion.style.display = 'none';
        yesBtn.style.display = 'none';
        if (noBtn) noBtn.style.display = 'none';
        
        // Show the success message
        if (winMessage) winMessage.classList.remove('hidden');
    });
}

// === 4. SURPRISE GIFT MESSAGE LOGIC ===
const giftBtn = document.getElementById('gift-btn');
const specialMsg = document.getElementById('special-msg');

if (giftBtn) {
    giftBtn.addEventListener('click', () => {
        // Hide the button
        giftBtn.style.display = 'none';
        
        // Show the special message
        if (specialMsg) specialMsg.classList.remove('hidden');
        
        // Extra special blue and pink confetti for the "Glacier" feel
        confetti({
            particleCount: 100,
            spread: 80,
            origin: { y: 0.8 },
            colors: ['#2196F3', '#ffb3c1', '#ffffff']
        });
    });
}