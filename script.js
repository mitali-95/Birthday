{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fnil\fcharset0 AppleColorEmoji;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener('DOMContentLoaded', () => \{\
    // IMPORTANT: Update these gift details for your friend!\
    const giftData = \{\
        "2025-05-29": \{\
            message: "A jhakaas Bollywood playlist for you\'94,\
            link: "https://open.spotify.com/playlist/57j48iOTBe4Y4349TLxCcU?si=rsLLXbpKQPu-aTfmZblhaQ&pi=ZJbO-4JvQLWJ0&nd=1&dlsi=f9fcc188499e4618" // Replace with your actual gift link!\
        \},\
        "2025-05-30": \{\
            message: \'93Your future husband entering your life like\'94,\
            link: "https://www.youtube.com/watch?v=V6sgb9RgxMo" // Replace with your actual gift link!\
        \},\
        "2025-05-31": \{\
            message: \'93There\'92s a whole Lovely Runner comic online, so you can relive the story!!\'94,\
            link: "https://www.webtoons.com/en/canvas/lovely-runner/stay-alive/viewer?title_no=970130&episode_no=1" // Replace with your actual gift link!\
        \},\
        "2025-06-01": \{\
            message: \'93Here\'92s a yellow umbrella for you\'94,\
            link: "https://www.youtube.com/shorts/pkKL9jVbxpU" // Replace with your actual gift link!\
        \},\
        "2025-06-02": \{\
            message: "Aaj game khel tu haha\'94,\
            link: https://poki.com/en/g/jelly-cat" // Replace with your actual gift link!\
        \},\
        "2025-06-03": \{\
            message: \'93Ok fine, I got an IPad for you, since you asked for it\'94,\
            link: "https://www.apple.com/ae/ipad-pro/" // Replace with your actual gift link!\
        \},\
        "2025-06-04": \{\
            message: "HAPPY BIRTHDAY, FAIZAN! 
\f1 \uc0\u55356 \u57225 
\f0  May your day be filled with joy, laughter, and everything you wish for! Here's your special birthday surprise!",\
            link: "https://www.youtube.com/watch?app=desktop&v=DIAcdeG70IE&t=0s" // Replace with your *main* birthday gift link!\
        \}\
    \};\
\
    const dateCards = document.querySelectorAll('.date-card');\
    const giftModal = document.getElementById('gift-modal');\
    const giftTitle = document.getElementById('gift-title');\
    const giftMessage = document.getElementById('gift-message');\
    const giftLink = document.getElementById('gift-link');\
    const closeModal = document.querySelector('.close-button');\
    const giftAnimation = document.querySelector('.gift-animation');\
    const currentDateDisplay = document.getElementById('currentDateDisplay');\
\
    // Get today's date, normalized to YYYY-MM-DD for easy comparison\
    const today = new Date();\
    const currentYear = today.getFullYear();\
    const currentMonth = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed\
    const currentDay = String(today.getDate()).padStart(2, '0');\
    const todayFormatted = `$\{currentYear\}-$\{currentMonth\}-$\{currentDay\}`;\
\
    // Display current date on header\
    const options = \{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' \};\
    currentDateDisplay.textContent = today.toLocaleDateString(undefined, options);\
\
\
    dateCards.forEach(card => \{\
        const cardDateStr = card.dataset.date; // Get the date from data-date attribute\
        const giftInfo = giftData[cardDateStr]; // Get gift info for this date\
\
        // Compare dates using their string format for simplicity\
        if (cardDateStr < todayFormatted) \{\
            // Past date: already opened\
            card.classList.add('opened');\
            card.querySelector('.gift-status').innerHTML = '
\f1 \uc0\u10004 \u65039 
\f0 '; // Checkmark for opened\
            card.addEventListener('click', () => openGift(giftInfo, cardDateStr));\
        \} else if (cardDateStr === todayFormatted) \{\
            // Current date: can be opened today\
            card.classList.add('current');\
            card.querySelector('.gift-status').innerHTML = '
\f1 \uc0\u55356 \u57217 
\f0 '; // Gift icon for today\
            card.addEventListener('click', () => openGift(giftInfo, cardDateStr));\
        \} else \{\
            // Future date: locked\
            card.classList.add('locked');\
            card.querySelector('.gift-status').innerHTML = '
\f1 \uc0\u55357 \u56594 
\f0 '; // Lock icon for future dates\
            card.addEventListener('click', () => \{\
                const [year, month, day] = cardDateStr.split('-');\
                const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];\
                alert(`Psst! This gift is still sleeping! Come back on $\{monthNames[parseInt(month) - 1]\} $\{parseInt(day)\}!`);\
            \});\
        \}\
    \});\
\
    function openGift(info, dateKey) \{\
        if (info) \{\
            // Set gift title and message\
            giftTitle.textContent = dateKey === "2025-06-04" ? "HAPPY BIRTHDAY!!!" : `Your Gift for $\{formatDateDisplay(dateKey)\}!`;\
            giftMessage.textContent = info.message;\
            giftLink.href = info.link;\
\
            // Adjust animation for birthday\
            if (dateKey === "2025-06-04") \{\
                giftAnimation.textContent = '
\f1 \uc0\u55358 \u56691 
\f0 '; // Party emoji for birthday\
                giftAnimation.style.fontSize = '5em';\
            \} else \{\
                giftAnimation.textContent = '
\f1 \uc0\u55356 \u57225 
\f0 '; // Regular confetti for other days\
                giftAnimation.style.fontSize = '4em';\
            \}\
\
            giftModal.style.display = 'flex'; // Show the modal\
        \}\
    \}\
\
    // Helper to format date for display in modal\
    function formatDateDisplay(dateStr) \{\
        const [year, month, day] = dateStr.split('-');\
        const date = new Date(year, parseInt(month) - 1, day);\
        return date.toLocaleDateString(undefined, \{ month: 'long', day: 'numeric' \});\
    \}\
\
    // Close modal when close button is clicked\
    closeModal.onclick = function() \{\
        giftModal.style.display = 'none';\
    \}\
\
    // Close modal when clicking outside of it\
    window.onclick = function(event) \{\
        if (event.target == giftModal) \{\
            giftModal.style.display = 'none';\
        \}\
    \}\
\});}