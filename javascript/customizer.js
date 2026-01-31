document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabs li');
    const tabContents = document.querySelectorAll('.tab-content');
    const buttonBack = document.querySelector('.button-back');
    const buttonNext = document.querySelector('.button-next');
    const colorButtons = document.querySelectorAll('.color-button');
    const candlePreview = document.getElementById('candle-preview');

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
                const color = button.getAttribute('data-color');
                candlePreview.src = `../images/Candle_${color}.svg`;
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
