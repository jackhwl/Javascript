/*
This is a recursive function without PTC
*/
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));

/*
This is a recursive function with PTC
*/
function factorialPTC(n, acc = 1) {
    if (n === 0) {
        return acc;
    } else {
        return factorialPTC(n - 1, n * acc);
    }
}

console.log(factorialPTC(5));
