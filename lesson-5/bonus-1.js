function Foo() {
    this._name = null;
}

Foo.prototype.getName = function () {
    return this._name;
}

Foo.prototype.setName = function (name) {
    this._name = name;
}
