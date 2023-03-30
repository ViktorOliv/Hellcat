let sendingOrder = document.querySelector(".btn-order");


sendingOrder.addEventListener ('click', sendOrder);

function sendOrder() {

  
  calcCartPrise();
  countCartCounter();
  
    const cartWrapper = document.querySelector('.cart-wrapper') ;
    const cartItems = cartWrapper.querySelectorAll(".cart-item");
    let shoppingList = '';
  

    cartItems.forEach(cartItem => {
      
      let itemData = {
        itemTitle: cartItem.querySelector(".cart-item__title").innerHTML,
        itemWeight: cartItem.querySelector(".cart-item__weight").innerHTML,
        itemNumber: cartItem.querySelector(".items__current").innerHTML,
        itemPrise: cartItem.querySelector(".price__currency").innerHTML,

      };

      itemDataString = itemData.itemTitle + '\n Розмір: ' + itemData.itemWeight + '\n Кількість:' + itemData.itemNumber + '\n Ціна:' + itemData.itemPrise  + '\n';
      
      shoppingList += itemDataString;
      
    });
  
    console.log(cartWrapper);
  
    const data = {
        idData: new Date (),
        tel: document.querySelector("#tel").value,
        pib: document.querySelector("#pib").value,
        location: document.querySelector("#location").value,
        shoppingLists: shoppingList,
        totalPrise: document.querySelector(".total-price").innerHTML,
  
      };
  
  
      // console.log(data);
  
  
      
      fetch('/sendmail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
  
      .then(response => response.json())
      .then(data => {
        const cartWrapper = document.querySelector(".cart-wrapper");
        const cartCounter = document.querySelector(".cart-counter");
        cartWrapper.innerHTML = "";
        cartCounter.innerHTML = "0";
        toggleCartStatus();
        
        alert(data.message);
      } )
      .catch(error => console.error(error));

};




// window.addEventListener('click', function (event) {

// if (event.target.hasAttribute ('data-order')) {

//   const data = {
//   tel: '+33644628065',
//   message: 'Hello World!',
  
// };

// async function orderSend (e) {
  

//   let response = await fetch('/sendmail.php', {
//             method: 'POST',
//             body: data
//           });
//           if (response.ok) {
//             let result = await response.json();
//             alert(result.message);
//             alert("OK!");
//           } else {
//             alert("ERROR");
//           }
    
// };

// orderSend ();

// };
// });