function saveCartTolocalStorage() {
    localStorage.setItem("cartBox", document.querySelector(".cart-box").innerHTML);
}