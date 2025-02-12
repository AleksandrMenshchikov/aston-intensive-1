const innerObject = {};
const middleArray = [1, 2, 3, innerObject];

// вариант 1
const workingObject1 = {
    a: middleArray
}

// вариант 2
const workingObject2 = new Object({a: middleArray});

// вариант 3
const workingObject3 = Object.create(Object.prototype, {
    a: {
        value: middleArray,
        writable: true,
        enumerable: true,
        configurable: true
    }
});

// вариант 4
const workingObject4 = {}
Object.defineProperty(workingObject4, 'a', {
    value: middleArray,
    writable: true,
    enumerable: true,
    configurable: true
})

// вариант 5
function CreateObject(a) {
    this.a = a;
}
const workingObject5 = new CreateObject(middleArray);

// вариант 6
class Ob {
    constructor(a) {
        this.a = a;
    }
}
const workingObject6 = new Ob(middleArray);

console.log(workingObject1)
console.log(workingObject2)
console.log(workingObject3)
console.log(workingObject4)
console.log(workingObject5)
console.log(workingObject6)
