import {cart, removeToCart, saveToStorage} from '../data/cart.js';

let checkoutHtml = '';

cart.forEach((item) => {

checkoutHtml +=
    `<div class="items js-items-${item.id}">
        <div class="img-area">
            <img class="img-cart" src="${item.image}">
        </div>

        <div class="product-name">
            <strong>product:</strong> ${item.name}
        </div>

        <div class="price">
            <strong>price:</strong> ${item.price}
        </div>

        <div class="quantity">
            <strong>quantity:</strong> ${item.quantity}
        </div>

        <button class="dlt-btn" data-product-id="${item.id}">delete</button>

        <input type="checkbox" class="checkbox">

        
    </div>`

});

document.querySelector('.cart-grid')
.innerHTML = checkoutHtml;

let totalQuantity = 0;
let totalOrder = 0;

    
    cart.forEach((item) =>{
        totalQuantity += parseFloat(item.quantity);
        totalOrder += parseFloat(item.price);
        
        
    });
    document.querySelector('.js-items-count')
    .innerHTML = `Items: ${totalQuantity}`;

        document.querySelector('.total-order')
    .innerHTML = `Total Order: ${totalOrder}`

   
   

    console.log(totalQuantity)
    console.log(totalOrder)


    document.querySelectorAll('.dlt-btn')
    .forEach((link) => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;

            removeToCart(productId);
               
                
            
           const container = document.querySelector(`.js-items-${productId}`);

            container.remove();
            
    
            
        });
    });
    console.log(cart)
