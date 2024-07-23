let autoReactions = new Promise((resolve, reject) => {
    const element = document.querySelector('[data-tooltip-id="ucc-10"]');

    if (!element) {
        reject(new Error('Element not found'));
        return;
    }

    const clickY = () => {
        const ariaExpanded = element.getAttribute('aria-expanded');
        if (ariaExpanded === 'false') {
            element.click();
            resolve('Element was clicked');
        } else {
            reject(new Error('Element was not clicked because aria-expanded is not false'));
        }
    }

    try {
        clickY();
    } catch (error) {
        reject(error);
    }
});

autoReactions
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });
