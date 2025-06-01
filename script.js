document.addEventListener('DOMContentLoaded', () => {
    // IMPORTANT: Update these gift details for your friend!
    const giftData = {
        "2025-05-29": {
            message: "A jhakaas Bollywood playlist for you!",
            link: "https://open.spotify.com/playlist/57j48iOTBe4Y4349TLxCcU?si=rsLLXbpKQPu-aTfmZblhaQ&pi=ZJbO-4JvQLWJ0&nd=1&dlsi=f9fcc188499e4618" // Replace with your actual gift link!
        },
        "2025-05-30": {
            message: "Your future husband entering your life like...",
            link: "https://www.youtube.com/watch?v=V6sgb9RgxMo" // Replace with your actual gift link!
        },
        "2025-05-31": {
            message: "There's a whole Lovely Runner comic online, so you can relive the story!!",
            link: "https://www.webtoons.com/en/canvas/lovely-runner/stay-alive/viewer?title_no=970130&episode_no=1" // Replace with your actual gift link!
        },
        "2025-06-01": {
            message: "Here's a yellow umbrella for you!",
            link: "https://www.youtube.com/shorts/pkKL9jVbxpU" // Replace with your actual gift link!
        },
        "2025-06-02": {
            message: "Aaj game khel tu haha!",
            link: "https://poki.com/en/g/jelly-cat" // Replace with your actual gift link!
        },
        "2025-06-03": {
            message: "Ok fine, I got an IPad for you, since you asked for it!",
            link: "https://www.apple.com/ae/ipad-pro/" // Replace with your actual gift link!
        },
        "2025-06-04": {
            message: "HAPPY BIRTHDAY, FAIZAN! 🎉 May your day be filled with joy, laughter, and everything you wish for! Here's your special birthday surprise!",
            link: "https://www.youtube.com/watch?app=desktop&v=DIAcdeG70IE&t=0s" // Replace with your *main* birthday gift link!
        }
    };

    const dateCards = document.querySelectorAll('.date-card');
    const giftModal = document.getElementById('gift-modal');
    const giftTitle = document.getElementById('gift-title');
    const giftMessage = document.getElementById('gift-message');
    const giftLink = document.getElementById('gift-link');
    const closeModal = document.querySelector('.close-button');
    const giftAnimation = document.querySelector('.gift-animation');
    const currentDateDisplay = document.getElementById('currentDateDisplay');

    // Get today's date, normalized to YYYY-MM-DD for easy comparison
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const currentDay = String(today.getDate()).padStart(2, '0');
    const todayFormatted = `${currentYear}-${currentMonth}-${currentDay}`;

    // Display current date on header
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDateDisplay.textContent = today.toLocaleDateString(undefined, options);


    dateCards.forEach(card => {
        const cardDateStr = card.dataset.date; // Get the date from data-date attribute
        const giftInfo = giftData[cardDateStr]; // Get gift info for this date

        // Compare dates using their string format for simplicity
        if (cardDateStr < todayFormatted) {
            // Past date: already opened
            card.classList.add('opened');
            card.querySelector('.gift-status').innerHTML = '✔️'; // Checkmark for opened
            card.addEventListener('click', () => openGift(giftInfo, cardDateStr));
        } else if (cardDateStr === todayFormatted) {
            // Current date: can be opened today
            card.classList.add('current');
            card.querySelector('.gift-status').innerHTML = '🎁'; // Gift icon for today
            card.addEventListener('click', () => openGift(giftInfo, cardDateStr));
        } else {
            // Future date: locked
            card.classList.add('locked');
            card.querySelector('.gift-status').innerHTML = '🔒'; // Lock icon for future dates
            card.addEventListener('click', () => {
                const [year, month, day] = cardDateStr.split('-');
                const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                alert(`Psst! This gift is still sleeping! Come back on ${monthNames[parseInt(month) - 1]} ${parseInt(day)}!`);
            });
        }
    });

    function openGift(info, dateKey) {
        if (info) {
            // Set gift title and message
            giftTitle.textContent = dateKey === "2025-06-04" ? "HAPPY BIRTHDAY!!!" : `Your Gift for ${formatDateDisplay(dateKey)}!`;
            giftMessage.textContent = info.message;
            giftLink.href = info.link;

            // Adjust animation for birthday
            if (dateKey === "2025-06-04") {
                giftAnimation.textContent = '🥳'; // Party emoji for birthday
                giftAnimation.style.fontSize = '5em';
            } else {
                giftAnimation.textContent = '🎉'; // Regular confetti for other days
                giftAnimation.style.fontSize = '4em';
            }

            giftModal.style.display = 'flex'; // Show the modal
        }
    }

    // Helper to format date for display in modal
    function formatDateDisplay(dateStr) {
        const [year, month, day] = dateStr.split('-');
        const date = new Date(year, parseInt(month) - 1, day);
        return date.toLocaleDateString(undefined, { month: 'long', day: 'numeric' });
    }

    // Close modal when close button is clicked
    closeModal.onclick = function() {
        giftModal.style.display = 'none';
    }

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == giftModal) {
            giftModal.style.display = 'none';
        }
    }
});