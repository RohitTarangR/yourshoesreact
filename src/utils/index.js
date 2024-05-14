export const addToCart = (id, allProduct) => {
  const localCartData = localStorage.getItem("cart-data");

  if (localCartData) {
    const cartData = JSON.parse(localCartData);

    const existingItemIndex = cartData.findIndex((item) => item.id === id);

    if (existingItemIndex !== -1) {
      cartData[existingItemIndex].qty += 1;
    } else {
      allProduct.qty = 1;
      cartData.push(allProduct);
    }
    localStorage.setItem("cart-data", JSON.stringify(cartData));
  } else {
    allProduct.qty = 1;
    localStorage.setItem("cart-data", JSON.stringify([allProduct]));
  }
};
