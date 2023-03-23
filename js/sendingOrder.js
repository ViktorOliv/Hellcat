let sendingOrder = document.querySelector(".btn-order");


sendingOrder.addEventListener ('click',  () => {
    const data = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        message: 'Жестяк'
      };
      
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
});



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