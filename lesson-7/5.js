const user = {
    name: 'Bob',
    funcFunc() {
        return function () {
            console.log(this);
        }
    },
    funcArrow() {
        return () => {
            console.log(this);
        }
    },
    arrowFunc: () => {
        return function () {
            console.log(this);
        }
    },
    arrowArrow: () => {
        return () => {
            console.log(this);
        }
    },
};

user.funcFunc()(); // window or undefined
user.funcArrow()(); // {name: 'Bob', funcFunc: ƒ, funcArrow: ƒ, arrowFunc: ƒ, arrowArrow: ƒ}
user.arrowFunc()(); // window or undefined
user.arrowArrow()(); // window or undefined
