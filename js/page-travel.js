const navHomeBtn = document.getElementById('nav-home-btn');
const navProductsBtn = document.getElementById('nav-products-btn');

navHomeBtn.onclick = () => {
    if (location.href != "http://127.0.0.1:5500/my_random_experiments/mesco/index.html") {
        location.href = "http://127.0.0.1:5500/my_random_experiments/mesco/index.html";
    }
}

navProductsBtn.onclick = () => {
    if (location.href != "http://127.0.0.1:5500/my_random_experiments/mesco/searching.html") {
        location.href = "http://127.0.0.1:5500/my_random_experiments/mesco/searching.html";
    }
}