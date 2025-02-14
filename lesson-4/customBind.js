Function.prototype.customBind = function (obj, ...args) {
    let func = this;

    return function () {
        func.apply(obj, [...args]);
    };
};
