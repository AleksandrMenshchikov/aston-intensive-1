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
    if (initialValue && this.length === 0) {
        return initialValue
    } else if (!initialValue && this.length === 1) {
        return this[0]
    }

    let accumulator = initialValue ? initialValue : this[0];

    if (!accumulator) {
        throw new TypeError('Reduce of empty array with no initial value')
    }

    let i = initialValue ? 0 : 1

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
