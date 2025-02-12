function createIncrement1() {
    let value = 0

    function increment() {
        value += 1;
        console.log(value)
    }

    const message = `Current value is ${value}`

    function log() {
        console.log(message)
    }

    return [increment, log];
}

const [increment1, log1] = createIncrement1();

increment1() // 1
increment1() // 2
increment1() // 3

log1() //"Current value is 0"        // почему не 3?

// increment меняет только замкнутую переменную value
// вариант, чтобы increment менял замкнутую переменную message
function createIncrement2() {
    let value = 0

    function increment() {
        value += 1;
        message = `Current value is ${value}`
        console.log(value)
    }

    let message = `Current value is ${value}`

    function log() {
        console.log(message)
    }

    return [increment, log];
}

const [increment2, log2] = createIncrement2();

increment2() // 1
increment2() // 2
increment2() // 3

log2() // "Current value is 3"
