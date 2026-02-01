document.addEventListener('DOMContentLoaded', () => {

    const cartLink = document.querySelector('.cart-link');
    const cartPanel = document.getElementById('cartPanel');
    const cartOverlay = document.getElementById('cartOverlay');
    const cartClose = document.getElementById('cartClose');

    if (!cartLink || !cartPanel || !cartOverlay || !cartClose) {
        console.error('Cart elements not found');
        return;
    }

    cartLink.addEventListener('click', (e) => {
        e.preventDefault();
        cartPanel.classList.add('is-open');
        cartOverlay.classList.add('is-active');
    });

    cartClose.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    function closeCart() {
        cartPanel.classList.remove('is-open');
        cartOverlay.classList.remove('is-active');
    }

});