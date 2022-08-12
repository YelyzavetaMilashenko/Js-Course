// № 8
let n1 = 7
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
console.log (factorial(n1))