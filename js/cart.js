
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

function addToCart(index) {
    
    let selectedShoe = document.querySelector(`.shoes[data-index="${index}"]`);

  
    let cartItem = {
        image: selectedShoe.querySelector('img').src,
        description: selectedShoe.querySelector('h4').innerText,
        price: selectedShoe.querySelector('i').innerText,
    };

    cartItems.push(cartItem);

  
    saveCartToLocalStorage();

  
    selectedShoe.querySelector('.add').innerText = 'Added';
    updateCartIcon();

   
    updateCartTotal();
}

function updateCartIcon() {
  
    let cartIcon = document.querySelector('.fa-cart-shopping');


    cartIcon.innerHTML = `<span>${cartItems.length}</span>`;
}

function updateCartTotal() {
    
    let totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

    let totalPriceElement = document.getElementById('totalPrice');

    if (totalPriceElement) {
        totalPriceElement.innerText = totalPrice + "LE";
    }
}

function saveCartToLocalStorage() {
   
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
function displayCartItems() {
    let cartContainer = document.getElementById('cartContainer');
    cartContainer.innerHTML = '';

    cartItems.forEach((item, index) => {
        let cartItemElement = document.createElement('div');
        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.description}">
            <p>${item.description}</p>
            <p>${item.price}</p>
            <span class="remove" onclick="removeCartItem(${index})"><i class="fa-solid fa-trash-can"></i></span>
        `;
        cartContainer.appendChild(cartItemElement);
    });
}

  
