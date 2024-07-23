const autoReactions = (function() {
    let intervalId = null;
    let currentEmoji = '';
    let clickDelay = 0;

    function isPaletteOpen() {
        const paletteButton = document.querySelector('[data-tooltip-id="ucc-10"]');
        return paletteButton && paletteButton.getAttribute('aria-expanded') === 'true';
    }
    
    function openReactionsPalette() {
        const paletteButton = document.querySelector('[data-tooltip-id="ucc-10"][aria-expanded="false"]');
        if (paletteButton) {
            paletteButton.click();
        }
    }
    
    function clickEmoji() {
        const emojiButton = document.querySelector(`[aria-label="${currentEmoji}"]`);
        if (emojiButton) {
            emojiButton.click();
        }
    }
    
    function startClicking() {
        if (!isPaletteOpen()) {
            stopReacting();
            return;
        }
        clickEmoji();
        intervalId = setInterval(() => {
            if (!isPaletteOpen()) {
                stopReacting();
                return;
            }
            clickEmoji();
        }, clickDelay);
    }
    
    function startReacting(emoji, delay) {
        currentEmoji = emoji;
        clickDelay = delay;
        
        if (!isPaletteOpen()) {
            openReactionsPalette();
            setTimeout(() => {
                if (isPaletteOpen()) {
                    startClicking();
                } else {
                    throw new Error('Не удалось открыть палетку.');
                }
            }, 1000);
        } else {
            startClicking();
        }
    }
    
    function stopReacting() {
        clearInterval(intervalId);
        intervalId = null;
    }
    
    document.addEventListener('click', function() {
        if (intervalId && !isPaletteOpen()) {
            stopReacting();
        }
    });

    return {
        startReacting,
        stopReacting
    };
})();


// Приклад використання:
// autoReactions.startReacting('💖', 1000);
// через деякий час можна викликати autoReactions.stopReacting();
