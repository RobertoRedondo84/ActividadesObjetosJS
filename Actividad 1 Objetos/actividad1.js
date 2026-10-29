let product = {
    name: "Portátil",
    price: 1000,
    stock: 5
};

if (!("discount" in product)) {
    product.discount= 0.1;
}

console.log("price" in product);
console.log("discount" in product);

for (let key in product) {
    console.log(key, product[key]);
}