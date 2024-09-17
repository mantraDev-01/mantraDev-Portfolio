const Products = [{
    image:'/images/portfolio_profile1.jpg',
    name : 'bulldog',
    price : 150
}];

let productHTML = '';


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
                <select value="1" class="selecta">
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
                <button class="order-btn">Order</button>
            </div>
        </div>`

        
    });
    
    const grid = document.querySelector('.product-grid');
    grid.innerHTML = productHTML;
