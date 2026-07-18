/**
 * Use Case: Shopping Cart
 *
 * Problem:
 * Every user should have an independent shopping cart.
 * The cart's items should not be directly accessible or modifiable
 * from outside the module.
 *
 * Why Closure?
 * The closure keeps the cart's internal state private while exposing
 * only the operations needed to interact with it.
 */

function createShoppingCart() {
  const items = [];

  return {
    addItem(product) {
      items.push(product);
      console.log(`Added "${product.name}" to the cart.`);
    },

    removeItem(productId) {
      const index = items.findIndex((item) => item.id === productId);

      if (index === -1) {
        console.log("Product not found.");
        return;
      }

      const [removedItem] = items.splice(index, 1);

      console.log(`Removed "${removedItem.name}" from the cart.`);
    },

    getItems() {
      // Return a copy to prevent external mutation
      return [...items];
    },

    getTotalPrice() {
      return items.reduce((total, item) => total + item.price, 0);
    },

    clear() {
      items.length = 0;
      console.log("Shopping cart has been cleared.");
    }
  };
}

const cart = createShoppingCart();

cart.addItem({
  id: 1,
  name: "Mechanical Keyboard",
  price: 120,
});

cart.addItem({
  id: 2,
  name: "Wireless Mouse",
  price: 65,
});

console.log(cart.getItems());

console.log(`Total: $${cart.getTotalPrice()}`);

cart.removeItem(1);

console.log(cart.getItems());

console.log(cart.items); // undefined

cart.clear();

console.log(cart.getItems());