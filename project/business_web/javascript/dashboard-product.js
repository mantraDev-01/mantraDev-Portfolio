import {cart, saveToStorage} from '../data/cart.js';
import {Products} from '../data/products.js';

let productHTML = '';

    const selecta = document.querySelector('.selecta');

    


    Products.forEach((product) =>{

        

        productHTML += `   <div class="container">
            <div class="img-area">
                <img class="img-product" src="${product.image}">
            </div>

            <div class="pname">
                <p>${product.name}</p>
            </div>

            <div class="price">
                <p>${product.price}</p>
            </div>

            <div class="quantity">
                <select class="selecta js-product-quantity-${product.id}">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>

            <div>
                <button data-product-id="${product.id}"
                 data-product-name="${product.name}"
                 data-product-price="${product.price}"
                 data-product-image="${product.image}"
                 data-product-quantity="${product.quantity}"
                class="order-btn js-add-to-cart">Add to cart</button>
            </div>
        </div>`
        

        
    });

    
    
    const grid = document.querySelector('.product-grid');
    grid.innerHTML = productHTML;


 

    document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            const productName = button.dataset.productName;
            const productPrice = button.dataset.productPrice;
            const productImage = button.dataset.productImage;
            const productQuantity = button.dataset.productQuantity;


   
                let matchItem;
            
                    cart.forEach((item) => {
                        if(productId === item.id){
                            matchItem = item;
                            
                        }
                    });

                    const quantitySelector = document.querySelector(`.js-product-quantity-${productId}`)

                    const quantity = Number(quantitySelector.value);
            
                    if(matchItem){
                        matchItem.quantity += parseFloat(quantity);
                        
                        let cartQuantity = 0;

                        cart.forEach((quantityx) => {
                            cartQuantity += parseFloat(quantityx.quantity);
                        });

                        const quantityCounter = document.querySelector('.quantity-counter');
                        quantityCounter.innerHTML = cartQuantity;
                        
                
                        saveToStorage();

                    }else{
                        cart.push({
                            id: productId,
                            image: productImage,
                            name : productName,
                            price : productPrice,
                            quantity: quantity,
                        });


                        
                        let cartQuantity = 0;

                        cart.forEach((quantityx) => {
                            cartQuantity += parseFloat(quantityx.quantity);
                        });

                        const quantityCounter = document.querySelector('.quantity-counter');
                        quantityCounter.innerHTML = cartQuantity;
                        
                
                        saveToStorage();
                       
                    }
            console.log(cart);
        });
       
    });
    

    
    
    
   

        document.querySelector('.cart-js')
        .addEventListener('click', () => {
            document.location = 'cart.html';
        });

        let cartQuantity = 0;

                        cart.forEach((quantityx) => {
                            cartQuantity += parseFloat(quantityx.quantity);
                        });

                        const quantityCounter = document.querySelector('.quantity-counter');
                        quantityCounter.innerHTML = cartQuantity;
                        
                        

                        
                        saveToStorage();

        
        
