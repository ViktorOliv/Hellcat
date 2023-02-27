getCartTolocalStorage();

function saveCartTolocalStorage() {
    localStorage.setItem("cartBox", document.querySelector(".cart-box").innerHTML);
};

function getCartTolocalStorage() {
    if (localStorage.getItem("cartBox")) {
        document.querySelector(".cart-box").innerHTML = localStorage.getItem("cartBox");
    }
}