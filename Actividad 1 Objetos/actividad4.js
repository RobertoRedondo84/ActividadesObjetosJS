
let inventory = {
    keyboard: 10,
    mouse: 8,
    laptop: 5
};

// 1. Mostrar el stock de cada producto
for (let item in inventory) {
    console.log(item, inventory[item]);
}

// 2. Actualizar el stock de un producto
function updateStock(item, quantity) {
    if (item in inventory) {
        inventory[item] = inventory[item] + quantity;
    } else {
        inventory[item] = quantity;
    }
}

// 3. Probar la función
updateStock("mouse", -2);
updateStock("monitor", 4);

// 4. Mostrar el inventario actualizado
console.log("Inventario actualizado:");

for (let item in inventory) {
    console.log(item, inventory[item]);
}
