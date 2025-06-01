class Cart{
  cartItems;

  #localStorageKey;

  constructor(localStorageKey){
      this.#localStorageKey=localStorageKey;
      this.#loadFromStorage();
  }

  #loadFromStorage(){

  this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));

  if (!this.cartItems|| !Array.isArray(this.cartItems)) {
    this.cartItems = [
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

}saveToStorage() {
  localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
}

addToCart(productId) {
  let matchingItem;

  this.cartItems.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    this.cartItems.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: '1'
    });
  }

  this.saveToStorage();
}

removeFromCart(productId) {
  this.cartItems = cart.cartItems.filter((cartItem) => cartItem.productId !== productId);
  this.saveToStorage();
}
updateDeliveryOption(productId,deliveryOptionId){
  let matchingItem;

  this.cartItems.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionId=deliveryOptionId;

  this.saveToStorage();


}

calculateCartQuantity() {
  return this.cartItems.reduce((total, item) => total + item.quantity, 0);
}

updateQuantity(productId, newQuantity) {
  const matchingItem = this.cartItems.find((item) => item.productId === productId);
  if (matchingItem) {
    matchingItem.quantity = newQuantity;
    this.saveToStorage();
  }
}

}


const cart= new Cart('cart-oop');

const businessCart=new Cart('cart-business');

cart.#localStorageKey='test';

console.log(cart);
console.log(businessCart);
console.log(businessCart instanceof Cart);


