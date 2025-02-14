const obj = {
    a: 1,
    e: (function () {
        return () => {
            console.log(this.a);
        };
    })(),
};

obj.e(); // undefined
obj.e.call({a: 2}); // undefined
