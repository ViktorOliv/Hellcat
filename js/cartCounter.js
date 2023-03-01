function countCartCounter() {
    const cartCounter = document.querySelector(".cart-counter");
    let cartWrapperLength = document.querySelectorAll(".cart-item").length;
    cartCounter.innerHTML = cartWrapperLength;
}