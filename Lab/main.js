let ob = {name: ["Ahmad", "Fathi"], age: [20, 21]};

for (let i in ob) {
    console.log(i);
    console.log('-----------');
    for (let j in ob[i]) {
        console.log(ob[i][j]);
    }
}