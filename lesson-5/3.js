class A {
    constructor() {
    }

    arrFunc = () => {
        console.log('wtf', this === i)
    }
}

var i = new A();
i.arrFunc(); //

console.log(i.hasOwnProperty('arrFunc')); // true
console.log(A.prototype.arrFunc); // undefined, стрелочные функции класса не устанавливаются в прототип


