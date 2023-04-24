let sendingOrder = document.querySelector(".btn-order");


sendingOrder.addEventListener ('click', sendOrder);

function sendOrder() {

  
  calcCartPrise();
  countCartCounter();

  if (!formValidate() == 0) {
    return;
  }
  
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

      itemDataString ='<p>'+ itemData.itemTitle + '<\p> Розмір: ' + itemData.itemWeight + '<\p> Кількість:' + itemData.itemNumber + '<\p> Ціна:' + itemData.itemPrise  + '<\p>';
      
      shoppingList += itemDataString;
      
    });
  
    // console.log(cartWrapper);
  
    const data = {
        idData: new Date (),
        tel: document.querySelector("#tel").value,
        pib: document.querySelector("#pib").value,
        location: document.querySelector("#location").value,
        shoppingLists: shoppingList,
        totalPrise: document.querySelector(".total-price").innerHTML,
        message: "Hello, world!",
  
      };
  
  
      // console.log(data);

const url = "./sendmail.php";

// Налаштування запиту
const options = {
  method: "POST",
  body: JSON.stringify(data),
  headers: { "Content-Type": "application/json" },
};

// Виконання запиту
fetch(url, options)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Обробка відповіді від сервера
    
        const cartWrapper = document.querySelector(".cart-wrapper");
        const cartCounter = document.querySelector(".cart-counter");
        cartWrapper.innerHTML = "";
        cartCounter.innerHTML = "0";
        toggleCartStatus();
        
        alert(data.message);
    
  })
  .catch(error => console.error(error));
  
    };


//////////////////////////////////
      // Старий код mail()
//////////////////////////////////
//       fetch('/sendmail.php', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       })
  
//       .then(response => response.json())
//       .then(data => {
//         const cartWrapper = document.querySelector(".cart-wrapper");
//         const cartCounter = document.querySelector(".cart-counter");
//         cartWrapper.innerHTML = "";
//         cartCounter.innerHTML = "0";
//         toggleCartStatus();
        
//         alert(data.message);
//       } )
//       .catch(error => console.error(error));

// };

//////////////////////////////////
      // Старий код mail()
//////////////////////////////////

