function Foo(name) {
    Object.defineProperty(this, 'name', {
        value: name,
        writable: false,
        enumerable: true,
        configurable: true,
    });
}

Foo.prototype.getName = function () {
    return this.name;
}

Foo.prototype.setName = function (value) {
    Object.defineProperty(this, 'name', {
        value: value,
    });
}

const f = new Foo("Alex");
f.name = "Jordan"
console.log(f); // { name: 'Alex' }
f.setName("Jordan");
console.log(f); // { name: 'Jordan' }
const name = f.getName();
console.log(name); // Jordan
