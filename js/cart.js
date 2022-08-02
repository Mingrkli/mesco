// Cart
const cartPopupBtn = document.querySelector('.shopping-cart-icon')
const cartContainer = document.querySelector('.cart-items')
const cartItemContainers = document.querySelector('.cart-item-containers')
// Cart Add
const cartAddIcon = document.querySelectorAll('.cart-arrow')
// Cart Remove
const cartDeleteIcon = document.querySelectorAll('.cart-delete')
// Checkout
const checkoutBtn = document.querySelector('.checkout-btn')

/* Event Listeners
============================================================================================= */
// Toggles hidden when user click cart icon
cartPopupBtn.addEventListener('click', () => {
    cartContainer.classList.toggle('hidden')
})

// When the user clicks Checkout, clears the cart and shows that you have ordered
checkoutBtn.addEventListener('click', () => {
    // Gets the current items
    let cartItem = cartItemContainers.querySelectorAll('.cart-item-container')
    // Remove all items
    cartItem.forEach(e => {
        e.remove()
    })

    alert('Thank you for your purchase. Your items will be delivered to you soon!')
    updatetotal();
})

/* For Loops
============================================================================================= */
// When user click the add button, add item to cart and update the total
for (let i = 0; i < products.data.length; i++) {
    cartAddIcon[i].addEventListener('click', () => {
        let cardIndex = cartAddIcon[i].parentElement.parentElement.parentElement;
        let cardImg = cardIndex.querySelector('.product-img img').src;
        let cardTitle = cardIndex.querySelector('.product-title').textContent;
        let cardPrice = cardIndex.querySelector('.price').textContent;

        addToCart(cardImg, cardTitle, cardPrice)
    })
}

/* Functions
============================================================================================= */
// Show how much items user has in there cart by a red circle with number in there shopping cart icon
function updateCartNum() {
    let cartNumContainer = document.querySelector('.cart-number');
    let cartItems = document.querySelectorAll('.cart-item-container');

    if (cartItems.length === 0) {
        cartNumContainer.classList.add('hidden');
    }
    else {
        cartNumContainer.classList.remove('hidden');
        cartNumContainer.innerText = cartItems.length;
    }
}

// when the user changes the quantity
function updateQuantity(e) {
    let input = e.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
}

// deleted user clicked item
function deleteCartItem(e) {
    let btnClicked = e.target
    btnClicked.parentElement.parentElement.remove()
    updatetotal();
}

// add product to cart
function addToCart(cardImg, cardTitle, cardPrice) {
    // Create new div dor cart items
    let cartItem = document.createElement('div')
    // Container with product-container class
    cartItem.classList.add('cart-item-container');

    // Check the item title and the cart items title, if match it doesn't get added
    let checkCardTitle = document.querySelectorAll('.cart-title')
    for (let i = 0; i < checkCardTitle.length; i++) {
        if (checkCardTitle[i].innerText === cardTitle) {
            alert("You have already added this item to cart")
            return
        }
    }

    // cart container innerHTML
    let cartItemsInner = `
        <div class="cart-item-img-amount">
            <img src="${cardImg}" alt="">
            <input type="number" value="1">
        </div>

        <div class="cart-item-title-price">
            <h1 class="cart-title">${cardTitle}</h1>
            <p class="cart-price">${cardPrice}</p>
            <span class="material-symbols-outlined cart-delete">close</span>
        </div>
    `

    // add the innerHTML and eventListeners to the container
    cartItem.innerHTML = cartItemsInner;
    cartItemContainers.append(cartItem)
    cartItem.querySelector('.cart-item-img-amount input').addEventListener('change', updateQuantity)
    cartItem.querySelector('.cart-delete').addEventListener('click', deleteCartItem)

    updatetotal()
}

function updatetotal() {
    // Item Container Variables
    let cartItemsContainer = document.querySelector('.cart-item-containers')
    let eachCartItem = cartItemsContainer.querySelectorAll('.cart-item-container')
    let total = 0;

    // For each item, save the items price and quantity into variables then calculate the total and displays it
    for (let item = 0; item < eachCartItem.length; item++) {
        let cartItem = eachCartItem[item]
        let itemPrice = cartItem.querySelector('.cart-price')
        let itemQuantity = cartItem.querySelector('.cart-item-img-amount input')

        let price = parseFloat(itemPrice.innerText.replace('$',''))
        let quantity = itemQuantity.value
        total += (price * quantity)
    }

    // Round the total since it contains cents
    total = Math.round(total * 100) / 100;
    document.querySelector('.price-total').innerText = '$' + total;

    updateCartNum();
}