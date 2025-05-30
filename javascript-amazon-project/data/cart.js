let cart;

loadFromStorage();

 export function loadFromStorage(){

  cart = JSON.parse(localStorage.getItem('cart'));

  if (!cart || !Array.isArray(cart)) {
    cart = [
      {
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
      },
      {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2'
      }
    ];
    saveToStorage(); // Save the default cart to localStorage immediately
  }


}








function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: '1'
    });
  }

  saveToStorage();
}

export function removeFromCart(productId) {
  cart = cart.filter((cartItem) => cartItem.productId !== productId);
  saveToStorage();
}

export function calculateCartQuantity() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

export function updateQuantity(productId, newQuantity) {
  const matchingItem = cart.find((item) => item.productId === productId);
  if (matchingItem) {
    matchingItem.quantity = newQuantity;
    saveToStorage();
  }
}

export { cart };

export function updateDeliveryOption(productId,deliveryOptionId){
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionId=deliveryOptionId;

  saveToStorage();


}