

export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
    cart =[{
        id: 'one',
        image:'',
        name : 'bulldog',
        price : 150,
        quantity:1,
    },
    {
        id: 'three',
        image: '',
        name: 'ido',
        price:250,
        quantity: 1
    }];
}


export function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}

/*
export function quantityCounter(){
    let cartQuantity = 0;

        cart.forEach((quantityx) => {
            cartQuantity += parseFloat(quantityx.quantity);
        });

        const quantityCounter = document.querySelector('.quantity-counter');
        quantityCounter.innerHTML = cartQuantity;

        saveToStorage();
}*/


export function removeToCart(productId){
    let newCart = [];

    cart.forEach((cartItem) => {
    if(cartItem.id !== productId){
        newCart.push(cartItem);
    };
    cart = newCart;
    });
    saveToStorage();
}

