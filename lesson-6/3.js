setTimeout(() => console.log("a"))

Promise.resolve()
    .then((first) => {
        console.log("first", first);
        return "b"
    })
    .then(Promise.resolve()
        .then((second) => {
            console.log("second", second);
            return "c"
        }))
    .then((third) => console.log("third", third))

console.log("d")

// d
// first undefined
// second undefined
// third b
// a
