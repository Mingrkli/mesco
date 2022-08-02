// Search
const userSearchInput = document.querySelector('.search-container input')
// Category Buttons
const categoryButtons = document.querySelectorAll('#category-bar a')
// product list
const productList = document.querySelector('#products-list-grid')

/* Event Listeners
============================================================================================= */
// Window load, have category btn selected depening on user choice in index.html
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('categoryBtnPress') === null) {
        updateProductList('All')
    }
    else {
        updateProductList(localStorage.getItem('categoryBtnPress'))
    }

    // Page load, selects category btn depending on user choice on main page
    categoryButtons.forEach (e => {
        e.classList.remove('selected')

        if (e.textContent === localStorage.getItem('categoryBtnPress')) {
            e.classList.add('selected')
        }
    })

    // Always return back to All btn selected
    localStorage.setItem('categoryBtnPress', 'All')
})

// filters when the user enters a key in the search bar
userSearchInput.addEventListener('input', () => {
    searchUpdateProductList(userSearchInput.value)
})

/* For Loops
============================================================================================= */
// category btn selected depending on user click
categoryButtons.forEach (e => {
    e.addEventListener('click', () => {
        // If the clicked btn doesn't contains selected class
        if(!e.classList.contains('selected')) {
            // Remove selected class form all btns
            categoryButtons.forEach (e => {
                e.classList.remove('selected')
            })
        }

        // Add selected class to btn clicked
        e.classList.add('selected')

        // Clears the search input
        userSearchInput.value = '';
    })
})

// adds each product in the product container
for (let i of products.data) {
    // Create container
    let card = document.createElement('div');
    // Container with product-container class
    card.classList.add('product-container');

    // container innerHTML
    let cardInner = `
        <div class="product-img">
            <img src="${i.img}" alt="">
            <p class='credits'>Photo by <a href="${i.creditLink}">${i.creditName}</a> on <a href="https://unsplash.com/s/photos/t-shirt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
        </div>

        <div class="product-text">
            <div>
                <p class="product-title">${i.name}</p>
                <p class="price">$${i.price}</p>
                <p class="category hidden">${i.category}</p>
            </div>

            <div class="shopping-cart-add-icon">
                <span class="material-symbols-outlined">add_shopping_cart</span>
                <span class="material-symbols-outlined cart-arrow">shopping_cart_checkout</span>
            </div>
        </div>
    `;

    // add the innerHTML to the container
    card.innerHTML = cardInner;
    productList.appendChild(card);
}

/* Functions
============================================================================================= */
// Updating product list when user pressing category btns
function updateProductList(name) {
    let eachProductCard = document.querySelectorAll('.product-container')

    eachProductCard.forEach(e => {
        // If button is ALL, show everything
        if (name === 'All') {
            e.classList.remove('hidden')

            // Selects the 'All' category Btn
            categoryButtons.forEach (btn => {
                if (btn.textContent === 'All') {
                    btn.classList.add('selected')
                }
            })
        }
        else {
            // If the item category text is same as name, show it
            if (e.querySelector('.category').textContent === name) {
                e.classList.remove('hidden')
            }
            else {
                e.classList.add('hidden')
            }
        }
    })

}

// Updates the products when user types in the search bar
function searchUpdateProductList(text) {
    let eachProductCard = document.querySelectorAll('.product-container')

    updateProductList('All')
    categoryButtons.forEach (e => {
        e.classList.remove('selected')
    })
    categoryButtons[0].classList.add('selected')
    
    eachProductCard.forEach(e => {
        let cardTextContent = e.querySelector('.product-title').textContent;
        cardTextContent = cardTextContent.toLowerCase()

        if (text === '') {
            e.classList.remove('hidden')
        }
        else {
            if (cardTextContent.includes(text)) {
                e.classList.remove('hidden')
            }
            else {
                e.classList.add('hidden')
            }
        }
    })
}