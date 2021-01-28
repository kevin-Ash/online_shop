const cartBtn= document.getElementById('cart-info');
const openCart = document.getElementById('open-cart');

cartBtn.addEventListener('click', displayCart);

function displayCart() {
    openCart.classList.toggle('display-cart');
}