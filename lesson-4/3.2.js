const obj = {
    child: {
        i: 10,
        b: () => console.log(this.i, this.d),
        c() {
            console.log(this.i, this);
        },
    }
};

obj.child.b(); // undefined window
obj.child.c(); // 10 {"i": 10, "b": f, "c": f}
