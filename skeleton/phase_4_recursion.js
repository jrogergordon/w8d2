const range = function (start, end) {
    let arr = [];
    for (i = start; i <= end; i++) {
        arr.push(i);
    };
    return arr;
}

const sumRec = function(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumRec(arr.slice(1))
}

const exponent = function (base, exp) {
    if (exp === 0) {
        return 1;
    }
    return base * exponent(base, exp-1);
}

const fibonacci = function (n) {
    if (n === 1) {
        return [1];
    }
    if (n === 2) {
        return [1, 1];
    }
    let before = []
    return [before].push((before[before.length - 1] + before[before.length - 2]));
}