let sendingOrder = document.querySelector(".btn-order");


sendingOrder.addEventListener ('click', sendOrder);

function sendOrder() {

  
  calcCartPrise();
  countCartCounter();

  if (!formValidate() == 0) {
    return;
  } else {
    let cartBox = document.querySelector('.cart-box .card');
    let cardBody = cartBox.querySelector('.card-body');
    let cartOrderForm = cartBox.querySelector('#order-form');
    cardBody.style.display = "none";
    cartOrderForm.style.display = "none";

    let div = document.createElement("div");
    div.style.paddingTop = '17vh';
    div.style.height = '20vh';
    div.id ='sending';
    let img = document.createElement('img');
    img.src = 'img/sending.svg';

    div.append(img);
    cartBox.append(div);
  };
  
    const cartWrapper = document.querySelector('.cart-wrapper') ;
    const cartItems = cartWrapper.querySelectorAll(".cart-item");
    let shoppingList = '';

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hour = String(currentDate.getHours()).padStart(2, '0');
    const minute = String(currentDate.getMinutes()).padStart(2, '0');
    const second = String(currentDate.getSeconds()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

    

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
        idData: formattedDate,
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
        
        document.querySelector('.card-body').style.display = "block";
        document.querySelector('#order-form').style.display = "block";
        
        document.querySelector('#sending').remove();
console.log(document.querySelector('#sending'));
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

