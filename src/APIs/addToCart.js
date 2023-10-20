export const addToCart = (productId) => {
  return fetch("https://fakestoreapi.com/carts", {
    method: "POST",
    body: JSON.stringify({
      userId: 5,
      products: [{ productId: productId, quantity: 1 }],
    }),
  }).then((res) => res.json());
};
