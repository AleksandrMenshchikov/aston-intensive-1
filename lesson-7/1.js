Array.prototype.customSome = function (cb, thisArg) {
    for (let i = 0; i < this.length; i++) {
        if (thisArg) {
            if (cb.call(thisArg, this[i], i, this)) {
                return true
            }
        } else {
            if (cb(this[i], i, this)) {
                return true
            }
        }
    }

    return false;
};

Array.prototype.customReduce = function (cb, initialValue) {
    if (typeof arguments[0] !== 'function') {
        throw new TypeError('First argument must be a function');
    } else if (arguments.length > 2) {
        throw new TypeError('Amount arguments must be no more than 2');
    } else if (arguments.length === 1 && this.length === 0) {
        throw new TypeError('Reduce of empty array with no initial value')
    } else if (arguments.length === 2 && this.length === 0) {
        return initialValue
    } else if (arguments.length === 1 && this.length === 1) {
        return this[0]
    }

    let accumulator = arguments.length === 2 ? initialValue : this[0];

    let i = arguments.length === 2 ? 0 : 1

    for (i; i < this.length; i++) {
        accumulator = cb(accumulator, this[i], i, this);
    }

    return accumulator;
};

Array.prototype.customMap = function (cb, thisArg) {
    const arr = []

    for (let i = 0; i < this.length; i++) {
        if (thisArg) {
            arr.push(cb.call(thisArg, this[i], i, this));
        } else {
            arr.push(cb(this[i], i, this));
        }
    }

    return arr;
}
