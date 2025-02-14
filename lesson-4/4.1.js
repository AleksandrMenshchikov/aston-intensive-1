const arr = [1, 2, 3]

const sum1 = arr.reduce((acc, currentValue) => acc + currentValue, 0);

let sum2 = 0;
arr.forEach((item) => sum2 += item);

let sum3 = 0;
for (let number of arr) {
    sum3 += number;
}

let sum4 = 0;
for (let i = 0; i < arr.length; i++) {
    sum4 += arr[i];
}

console.log(sum1);
console.log(sum2)
console.log(sum3)
console.log(sum4)
////////////////////////////////////////////

const arr1 = ["ab", "cd", "ef"]

const str1 = arr1.reduce((acc, currentValue) => acc + currentValue, "");

const str2 = arr1.join("");

let str3 = "";
arr1.forEach((item) => str3 += item);

let str4 = "";
for (let i = 0; i < arr1.length; i++) {
    str4 += arr1[i];
}

let str5 = "";
for (let string of arr1) {
    str5 += string;
}

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(str5);
////////////////////////////////////////////

const arr2 = [3, 2, 5, 1, 4, 7, 6];

const maxValue = Math.max(...arr2);

const minValue = Math.min(...arr2);

let maxValue1 = arr2[0]
let minValue1 = arr2[0]
arr2.forEach((num) => {
    if (num > maxValue1) {
        maxValue1 = num;
    } else if (num < minValue1) {
        minValue1 = num;
    }
});

const sortedArr = arr2.toSorted((a, b) => b - a);
const maxValue2 = sortedArr[0];
const minValue2 = sortedArr.at(-1);

console.log(maxValue);
console.log(minValue);
console.log(maxValue1);
console.log(minValue1);
console.log(maxValue2);
console.log(minValue2);
