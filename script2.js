let robert = {
    food: 0,
    clean: 0,
    happy: 0,
    health: 0,
    socialization: 0,
    money: 0,
    key: function(n) {
        return this[Object.keys(this)[n]];
    }
};

function mode(stats) {
    for (let key in robert) {
        robert[key] -= stats;
    }
}