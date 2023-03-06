let sendingOrder = document.querySelector(".btn-order");


sendingOrder.addEventListener ('click',  () => {
    const data = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        message: 'Hello World!'
      };
      
      fetch('/path/to/server.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
});