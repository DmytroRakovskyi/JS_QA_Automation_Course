const autoReactions = (function() {
    let intervalId = null;
    let currentEmoji = '';
    let clickDelay = 0;

    function evaluateXPath(xpath) {
        return document.evaluate(
            xpath,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue;
    }

    function isPaletteOpen() {
        const emojiButton = document.querySelector('[aria-label="👍"]'); // оставил как есть, разве что в Африке черные смайлики :))
        return !!emojiButton;
    }

    function openReactionsPalette() {
        const paletteButton = evaluateXPath('/html/body/div[1]/c-wiz/div/div/div[26]/div[3]/div[10]/div/div/div[2]/div/div[4]/div/span/button');
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

// autoReactions.startReacting('💖', 1000);
// autoReactions.stopReacting();
