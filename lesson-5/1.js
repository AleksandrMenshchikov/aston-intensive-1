function Hamster() {
    this.food = [];
}

Hamster.prototype.found = function (something) {
    this.food.push(something);
};

speedy = new Hamster();
lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

console.log(speedy.food.length); // 2
console.log(lazy.food.length); // 0
