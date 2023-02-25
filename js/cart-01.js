window.addEventListener ('click', function (event) {
    if (event.target.hasAttribute ('data-cart')) {
        const card = event.target.closest('.product');
        console.log(card);

        const productInfo = {
            id: card.dataset.id,
            name: card.querySelector('.card-info-Name').innerHTML,

        }; 
        console.log(productInfo);
    }
});


