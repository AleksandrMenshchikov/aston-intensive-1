function getFirstPairOfSum(sum, arr) {
    if (arr.length < 2) {
        return null;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                return [arr[i], arr[j]];
            }
        }
    }

    return null;
}

console.log(getFirstPairOfSum(13, [1, 2, 3, 4, 5, 6, 7, 8, 9]))
