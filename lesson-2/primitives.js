const str1 = "Hello World";
const str2 = String("Hello World");

const num1 = 123;
const num2 = Number(123);

const bool1 = true;
const bool2 = Boolean(true);

const n = null;

const u = undefined;

const symbol = Symbol();

const bigint1 = 1n;
const bigint2 = BigInt(1);

const obj = {
    str1,
    str2,
    num1,
    num2,
    bool1,
    bool2,
    n,
    u,
    symbol,
    bigint1,
    bigint2,
}

for (let objKey in obj) {
    console.log(typeof obj[objKey]);
}
