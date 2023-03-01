const cartWrapper = document.querySelector('.cart-wrapper');

window.addEventListener ('click', function (event) {
    if (event.target.hasAttribute ('data-cart')) {
        const card = event.target.closest('.product');

        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.dataset.src,
            title: card.querySelector('.card-info-Name').innerHTML,
            counter: card.querySelector('#quantity-product').value,
            prise: card.querySelector('.price-number').innerHTML,
            size: card.querySelector(".select select").value,
            
        }; 



        if (productInfo.title == "ШАЙБА ЗМИНАЄМА CRUSH WASHER") {
            productInfo.title = "ШАЙБА ЗМИНАЄМА <br> CRUSH WASHER";
        }



        const itemInCart =  cartWrapper.querySelector(`[data-id= '${productInfo.id}']`);

        if (itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]');
            
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
            
        } else {

            const cartItemHTML = `
            <div class="cart-item" data-id="${productInfo.id}">
                                    <div class="cart-item__top">
                                        <div class="cart-item__img">
                                            <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
                                        </div>
                                        <div class="cart-item__desc">
                                            <div class="cart-item__title">${productInfo.title}</div>
                                            <div class="cart-item__weight"> ${productInfo.size}</div>
    
                                            <!-- cart-item__details -->
                                            <div class="cart-item__details">
    
                                                <div class="items items--small counter-wrapper">
                                                    <div class="items__control" data-action="minus">-</div>
                                                    <div class="items__current" data-counter="">${productInfo.counter}</div>
                                                    <div class="items__control" data-action="plus">+</div>
                                                </div>
    
                                                <div class="price">
                                                    <div class="price__currency">${productInfo.prise} ₴</div>
                                                </div>
    
                                            </div>
                                            <!-- // cart-item__details -->
    
                                        </div>
                                    </div>
                                </div>
            `;
    
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        }

        card.querySelector('#quantity-product').value = '1';

        toggleCartStatus();

        calcCartPrise();
        countCartCounter();
    }
    
    saveCartTolocalStorage();
});
