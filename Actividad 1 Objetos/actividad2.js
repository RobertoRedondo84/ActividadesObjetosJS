let game = {
    title: "Zelda",
    year: 1998,
    score: 9.5,
    genre: "Adventure"
};

function doubleNumbers(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] = obj[key] * 2;
        }
    }
}

doubleNumbers(game);
console.log(game);