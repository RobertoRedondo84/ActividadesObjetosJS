
let user = {
    name: "Laura",
    age: 22,
    city: "Madrid"
};

function countProperties(obj) {
    let contador = 0;

    for (let key in obj) {
        contador++;
        console.log(key, obj[key]);
    }

    return contador;
}

console.log(countProperties(user));
