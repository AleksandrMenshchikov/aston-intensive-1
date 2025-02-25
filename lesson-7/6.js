var a = 1;
var b = 2;

(function () {
    var b = 3;
    a += b;
})();

console.log(a); // 4 значение изменилось в функции IIFE a += b
console.log(b); // 2 осталось прежним, в функции IIFE не произошло изменение глобальной b
