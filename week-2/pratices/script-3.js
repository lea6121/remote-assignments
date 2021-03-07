function avg(data) {
  let a = data.products[0].price;
  let b = data.products[1].price;
  let c = data.products[2].price;

  return (a + b + c) / data.products.length;

} avg({
  size: 3, products: [
    {
      name: "Product 1",
      price: 100
    },
    {
      name: "Product 2",
      price: 700
    },
    {
      name: "Product 3",
      price: 250
    }
  ]
});