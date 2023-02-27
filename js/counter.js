// const btnMinus =  document.querySelector('[data-action="minus"]');
// const btnPlus =  document.querySelector('[data-action="plus"]');
// const counter = document.querySelector('[data-counter]');

// btnMinus.addEventListener('click', function () {

//     if (parseInt(counter.innerHTML) > 1) {
//         counter.innerText = --counter.innerText;
//     }
// });

// btnPlus.addEventListener('click', function () {
//     counter.innerText = ++counter.innerText;
// });


window.addEventListener('click', function (event) {
    let counter;

if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
    const counterWrapper = event.target.closest('.counter-wrapper');
    counter = counterWrapper.querySelector('[data-counter]');

}

    if (event.target.dataset.action === 'plus') {

        counter.innerText = ++counter.innerText;
    }

    if (event.target.dataset.action === 'minus') {
        
        if (parseInt(counter.innerHTML) > 1) {
            counter.innerText = --counter.innerText;
            
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            
            event.target.closest('.cart-item').remove();

            toggleCartStatus();

            calcCartPrise();
        }
    }

    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper') ) {
        calcCartPrise();
    }
});