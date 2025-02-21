console.log("1");

setTimeout(() => {
    console.log("2")
}, 1);

const promise = new Promise(resolve => {
    console.log("3")
    resolve()
});

promise.then(() => console.log("4"))

setTimeout(() => console.log("5"))

console.log("6")

// 1 3 6 4 5 2
