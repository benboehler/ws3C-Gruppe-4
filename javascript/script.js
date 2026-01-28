const collaborationData = {
    simpsons: [
        { title: "Donut Dreams", desc: "glazed donuts + vanilla", price: "12.50", svg: "../images/simpsons-1.svg", tag: "best-seller" },
        { title: "Duffer Beer Breeze", desc: "hops + citrus", price: "9.50", svg: "../images/simpsons-2.svg", tag: "" },
        { title: "Springfield Summer", desc: "cut grass + flowers", price: "9.50", svg: "../images/simpsons-3.svg", tag: "" }
    ],
    fortnite: [
        { title: "Slurp Juice", desc: "blue raspberry + energy", price: "11.00", svg: "../images/fortnite-1.svg", tag: "limited" },
        { title: "Shield Pot", desc: "blackberry + mint", price: "11.00", svg: "../images/fortnite-2.svg", tag: "" },
        { title: "Llama Loot", desc: "confetti + sugar", price: "11.00", svg: "../images/fortnite-3.svg", tag: "" }
    ],
    pokemon: [], // Add your data here
    harrypotter: [],
    stranger: [],
    fhnw: []
};

const productGrid = document.getElementById('product-grid');

function renderProducts(brand) {
    const candles = collaborationData[brand];
    if (!candles) return;

    productGrid.innerHTML = '';

    candles.forEach(candle => {
        const tagHTML = candle.tag ? `<span class="tag is-rounded best-seller-tag">${candle.tag}</span>` : '';
        const cardHTML = `
                    <div class="column is-4">
                        <div class="candle-item">
                            <div class="image-container">
                                ${tagHTML}
                                <img src="${candle.svg}" alt="${candle.title}">
                            </div>
                            <div class="content has-text-left mt-4">
                                <h3 class="title is-4 mb-2">${candle.title}</h3>
                                <p class="subtitle is-6">${candle.desc}</p>
                            </div>
                            <button class="button is-fullwidth add-to-cart">
                                <span>Add to Cart</span>
                                <span class="price">CHF ${candle.price}</span>
                            </button>
                        </div>
                    </div>
                `;
        productGrid.innerHTML += cardHTML;
    });
}

document.querySelectorAll('.collab-card').forEach(card => {
    card.addEventListener('click', () => {
        const brand = card.getAttribute('data-target');
        document.querySelectorAll('.collab-card').forEach(c => c.classList.remove('is-active'));
        card.classList.add('is-active');
        renderProducts(brand);
    });
});

renderProducts('simpsons');