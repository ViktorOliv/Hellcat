getCartTolocalStorage();

function saveCartTolocalStorage() {
    localStorage.setItem("cartBox", document.querySelector(".cart-box").innerHTML);
    localStorage.setItem("cartCounter", document.querySelector(".cart-counter").innerHTML);
};

function getCartTolocalStorage() {
    if (localStorage.getItem("cartBox")) {
        document.querySelector(".cart-box").innerHTML = localStorage.getItem("cartBox");
    }

    if (localStorage.getItem("cartCounter")) {
        document.querySelector(".cart-counter").innerHTML = localStorage.getItem("cartCounter");
    }
    
};