Function.prototype.customBind = function (obj) {
    let func = this;

    return function (...args) {
        const uniqueKey = Date.now();
        obj[uniqueKey] = func;
        obj[uniqueKey](...args);
    };
};

const someThis = {x: 6}

function foo(someArg) {
    console.log(this.x + someArg)
}

foo.customBind(someThis)(15)
foo.bind(someThis)(15)
