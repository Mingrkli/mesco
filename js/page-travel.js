const navHomeBtn = document.getElementById('nav-home-btn');
const navProductsBtn = document.getElementById('nav-products-btn');

navHomeBtn.onclick = () => {
    if (location.href != "index.html") {
        location.href = "index.html";
    }
}

navProductsBtn.onclick = () => {
    if (location.href != "searching.html") {
        location.href = "searching.html";
    }
}