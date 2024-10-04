import {cart, removeToCart, saveToStorage, minus} from '../data/cart.js';

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
            <strong>quantity:</strong> 
            <button class="minus" data-product-id="${item.id}">-</button>
             ${item.quantity} 
             <button class="add">+</button>
        </div>

        <button class="dlt-btn" data-product-id="${item.id}">delete</button>

        <input type="checkbox" class="checkbox" data-product-id="${item.id}">

        
    </div>`


});



document.querySelector('.cart-grid')
.innerHTML = checkoutHtml;

let totalQuantity = 0;
let totalOrder = 0;
let total;

    
    cart.forEach((item) =>{
        totalQuantity += parseFloat(item.quantity);
        total = item.quantity * item.price;
        totalOrder += total;
        
        
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
               
                
            
           const container = document.querySelector(`.js-items-${productId}`);

            container.remove();
            
    
            
        });
        
    });

    document.querySelectorAll('.minus')
    .forEach((check) => {
        const productId = check.dataset.productId;

        if(!check.checked){
            console.log('hello')
        }
        else{
            console.log('hi')
        }
    })

    
    console.log(cart)