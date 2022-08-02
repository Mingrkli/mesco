// Nav Bar
const phoneMenuBtn = document.querySelector('span.nav-menu-btn')
const navMenuLinks = document.querySelector('#nav-bar .wrapper')
const lightDarkModeBtn = document.querySelectorAll('.light-dark-btn')
// Dark Mode 
const bodyTag = document.querySelector('body')
const searchBar = document.querySelector('.search-container input')
const textTags = document.querySelectorAll('h1, a, p, #product-text div p, .shopping-cart-add-icon span')

/* Event Listeners
============================================================================================= */
// When phone use presses menu btn it adds data-open
phoneMenuBtn.addEventListener('click', () => {
    navMenuLinks.toggleAttribute('data-open')
})

/* For Loops
============================================================================================= */
// Switches between light and dark mode when pressing lightDarkModeBtn
lightDarkModeBtn.forEach (e => {
    e.addEventListener('click', () => {
        // Light & Dark mode icon switch
        lightDarkModeBtn.forEach(btn => {
            btn.classList.toggle('hidden')
        })

        // Switching tags to dark mode
        bodyTag.toggleAttribute('data-dark-mode-bg')
        searchBar.toggleAttribute('data-dark-mode-bg')
        searchBar.toggleAttribute('data-dark-mode-text')
        textTags.forEach (e => {
            e.toggleAttribute('data-dark-mode-text')
        })
    })
})