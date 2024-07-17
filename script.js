  // Анімація знижки
  anime({
    targets: '.discount_img',
    rotate: 360,
    duration: 10000,
    easing: 'linear',
    loop: true
 })
 



 let discount = document.querySelector('.discount');
 // Повідомлення про те, що знижку активовано!
function discounts(){
  confirm("Вашу знижку активовано")

  totalPrice= totalPrice * 0.85;
  document.getElementById('total').innerText = totalPrice;
}


discount.addEventListener('click', discounts);

// Працюємо з додаванням товарів у кошик і визначення загальної вартості


let totalPrice = 0;
        let cartItems = [];

        function addToCart(item, price) {
            totalPrice += price;
            cartItems.push(item);
            document.getElementById('total').innerText = totalPrice;
        }

        function checkout() {
            if (cartItems.length === 0) {
                alert("Ваш кошик порожній.");
                return;
            }

            let itemsList = cartItems.join(', ');
            alert(`Ви купили: ${itemsList}\nЗагальна вартість: ${totalPrice} грн`);
          
        }

        function resetCart() {
            totalPrice = 0;
            cartItems = [];
            document.getElementById('total').innerText = totalPrice;
        }


