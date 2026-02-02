document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabs li');
    const tabContents = document.querySelectorAll('.tab-content');
    const buttonBack = document.querySelector('.button-back');
    const buttonNext = document.querySelector('.button-next');
    const colorButtons = document.querySelectorAll('.color-button');
    const scentButtons = document.querySelectorAll('.scent-button');
    const wickButtons = document.querySelectorAll('.wick-button');
    const inputText = document.querySelectorAll('.input-text');
    const candlePreview = document.getElementById('candle-preview');
    const scentOverlay = document.getElementById('scent-overlay');
    const textOverlay = document.getElementById('text-overlay');

    let currentIndex = 0;

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            updateTabVisibility(index);
        });
    });

    if (buttonBack) {
        buttonBack.addEventListener('click', () => {
            if (currentIndex > 0) {
                updateTabVisibility(currentIndex - 1);
            }
        });
    }

    if (buttonNext) {
        buttonNext.addEventListener('click', () => {
            if (currentIndex < tabs.length - 1) {
                updateTabVisibility(currentIndex + 1);
            }
        });
    }

    if (colorButtons && candlePreview) {
        colorButtons.forEach(button => {
            button.addEventListener('click', () => {
                colorButtons.forEach(btn => btn.classList.remove('is-selected'));
                button.classList.add('is-selected');

                const color = button.getAttribute('data-color');
                candlePreview.src = `../images/Candle_${color}.svg`;
            });
        });
    }

    if (scentButtons && scentOverlay) {
        scentButtons.forEach(button => {
            button.addEventListener('click', () => {
                scentButtons.forEach(btn => btn.classList.remove('is-selected'));
                button.classList.add('is-selected');

                const scent = button.getAttribute('data-scent');
                scentOverlay.src = `../images/Label_${scent}.svg`;
            });
        });
    }

    if (wickButtons) {
        wickButtons.forEach(button => {
            button.addEventListener('click', () => {
                wickButtons.forEach(btn => btn.classList.remove('is-selected'));
                button.classList.add('is-selected');
            });
        });
    }

    if (inputText && textOverlay) {
        inputText.forEach(input => {
            input.addEventListener('input', () => {
                textOverlay.textContent = input.value;
            });
        });
    }

    function updateTabVisibility(index) {
        // Update active tab
        tabs.forEach((t, i) => {
            if (i === index) {
                t.classList.add('is-active');
            } else {
                t.classList.remove('is-active');
            }
        });

        // Update tab contents
        tabContents.forEach((content, i) => {
            if (i === index) {
                content.classList.remove('is-hidden');
            } else {
                content.classList.add('is-hidden');
            }
        });

        // Update buttons visibility
        if (index === 0) {
            buttonBack.classList.add('is-hidden');
        } else {
            buttonBack.classList.remove('is-hidden');
        }

        if (index === tabs.length - 1) {
            buttonNext.classList.add('is-hidden');
        } else {
            buttonNext.classList.remove('is-hidden');
        }

        currentIndex = index;
    }
    
    updateTabVisibility(0);
});
