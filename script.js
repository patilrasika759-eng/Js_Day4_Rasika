const products = [
    {
        name: "Laptop",
        price: 50000,
        category: "Electronics"
    },
    {
        name: "Mouse",
        price: 800,
        category: "Electronics"
    },
    {
        name: "Keyboard",
        price: 2000,
        category: "Electronics"
    },
    {
        name: "Bag",
        price: 900,
        category: "Accessories"
    },
    {
        name: "Bottle",
        price: 100,
        category: "Home"
    }
];

const cheapProducts = products.filter(product => product.price < 1000);

console.log("Products under ₹1000:");
console.log(cheapProducts);

const productNames = products.map(product => product.name);

console.log("Product Names:");
console.log(productNames);

const totalPrice = products.reduce(
    (total, product) => total + product.price,
    0
);

console.log("Total Price:", totalPrice);