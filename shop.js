/*
IIFE to seperate concerns
*/

// SHOW CART 
(function(){
    const cartBtn= document.getElementById('cart-info');
    const openCart = document.getElementById('open-cart');
    
    cartBtn.addEventListener('click', displayCart);
    
    function displayCart() {
        openCart.classList.toggle('display-cart');
    }
})();

// ADD ITEMS TO CART
(function(){
    const addTocartBtn = document.querySelectorAll('.product-item-icon');

    addTocartBtn.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            
            if(event.target.parentElement.classList.contains('product-item-icon')){

                // Traverse DOM to get img url
                let cartImgUrl = event.target.parentElement.previousElementSibling.src

                // Create obj to store cart details
                const cartItemObj = {}
                cartItemObj.img = cartImgUrl;
              

                let cartItemName = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;

                let cartItemPrice = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;


                cartItemObj.name = cartItemName;

                console.log(
                    cartImgUrl,
                    cartItemName,
                    cartItemPrice );
                
            }

        })
    });
})();