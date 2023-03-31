const cartBox = document.querySelector(".cart-box");
const navCart = document.querySelector(".nav .cart");

navCart.addEventListener('click', showCart );
window.addEventListener ('click', closeCart);


function showCart(event) {
    if ((event.target.hasAttribute ('alt') || event.target.classList.contains('cart-counter'))) {
        document.body.classList.toggle('_lock');
        cartBox.classList.toggle('_active');
    };
};


function closeCart (event) {
    if (event.target.classList.contains('closeCart')) {
        document.body.classList.toggle('_lock');
        cartBox.classList.toggle('_active');

    };

}