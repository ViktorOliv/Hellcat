window.addEventListener ('click', function (event) {
    if (event.target.hasAttribute ('data-cart')) {
        const card= event.target.closest('.product');
        const productSize = card.querySelector("select");
        const cartItem = document.querySelectorAll (".cart-item");

        cartItem.forEach(cartItemId => {

            // let && "Добавить синхронізацію по назві"

            if (card.dataset.id  == cartItemId.dataset.id && productSize.value !== cartItemId.querySelector(".cart-item__weight").textContent) {
                card.dataset.id += `.${productSize.selectedIndex}`;

            };
            if (card.dataset.id  !== cartItemId.dataset.id && productSize.value == cartItemId.querySelector(".cart-item__weight").textContent && card.querySelector(".card-info-Name").textContent == cartItemId.querySelector(".cart-item__title").textContent ) {
                card.dataset.id  = cartItemId.dataset.id;
            };


        });
        
    };

    });

