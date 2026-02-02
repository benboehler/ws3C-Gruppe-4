const collaborationData = {
    simpsons: {
        header: {icon: "../images/donut.svg", title: "The Simpsons x Candlewick", subtitle: "D'oh-lightful Aroma"},
        items: [
            {
                title: "Donut Dreams",
                desc: "glazed donuts + vanilla",
                price: "12.50",
                svg: "../images/simpsons-1.svg",
                tag: "best-seller"
            },
            {
                title: "Duffer Beer Breeze",
                desc: "hops + citrus",
                price: "11.00",
                svg: "../images/simpsons-2.svg",
                tag: ""
            },
            {
                title: "Springfield Summer",
                desc: "cut grass + flowers",
                price: "11.00",
                svg: "../images/simpsons-3.svg",
                tag: ""
            }
        ]
    },
    fortnite: {
        header: {icon: "../images/fortnitefigure.png", title: "Fortnite x Candlewick", subtitle: "Victory Royale Scent"},
        items: [
            {
                title: "Victory Royale",
                desc: "grapefruit + lemon zest",
                price: "12.50",
                svg: "../images/fortnite-1.svg",
                tag: ""
            },
            {
                title: "Chug Jug Chill",
                desc: "blueberry + mint",
                price: "11.00",
                svg: "../images/fortnite-2.svg",
                tag: "bestseller"
            },
            {title: "Llama Loot", desc: "tropical fruit", price: "11.00", svg: "../images/fortnite-3.svg", tag: ""}
        ]
    },
    harrypotter: {
        header: {icon: "../images/harrypottericon.png", title: "Harry Potter x Candlewick", subtitle: "Magical Fragrances"},
        items: [
            {
                title: "Butterbeer",
                desc: "butterscotch + vanilla",
                price: "11.00",
                svg: "../images/harrypotter-1.svg",
                tag: ""
            },
            {
                title: "Forbidden Forest",
                desc: "pine needles + damp soil",
                price: "11.00",
                svg: "../images/harrypotter-2.svg",
                tag: ""
            },
            {
                title: "Expecto Patronum",
                desc: "white tea + bergamot",
                price: "11.00",
                svg: "../images/harrypotter-3.svg",
                tag: ""
            }
        ]
    },
    strangerthings: {
        header: {icon: "../images/strangerthingsicon.png", title: "Stranger Things x Candlewick", subtitle: "From the Upside Down"},
        items: [
            {
                title: "Upside Down",
                desc: "dark woods + ash",
                price: "11.00",
                svg: "../images/strangerthings-1.svg",
                tag: ""
            },
            {
                title: "Scoops Ahoy",
                desc: "ice cream + strawberry",
                price: "12.50",
                svg: "../images/strangerthings-2.svg",
                tag: "limited"
            },
            {
                title: "Running Up That Hill",
                desc: "lavender + mist",
                price: "11.00",
                svg: "../images/strangerthings-3.svg",
                tag: ""
            }
        ]
    }

};

const productGrid = document.getElementById('product-grid');

function renderProducts(brand) {
    const data = collaborationData[brand];
    if (!data) return;

    // 1. Update Header Info
    document.getElementById('collab-icon').src = data.header.icon;
    document.getElementById('collab-title').innerText = data.header.title;
    document.getElementById('collab-subtitle').innerText = data.header.subtitle;

    const subtitleElement = document.getElementById('collab-subtitle');
    subtitleElement.innerText = data.header.subtitle;

    if (brand === 'strangerthings') {
        subtitleElement.classList.add('upside-down-text');
    } else {
        subtitleElement.classList.remove('upside-down-text');
    }
    // 2. Update Product Grid
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    data.items.forEach(candle => {
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