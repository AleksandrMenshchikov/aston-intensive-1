let a = 5

console.log(a)

setTimeout(() => {
    console.log(a)
    a = 10
}, 0)

Promise.resolve().then(() => {
    console.log(a)
    a = 15
})

console.log(a)

// 5 5 5 15
