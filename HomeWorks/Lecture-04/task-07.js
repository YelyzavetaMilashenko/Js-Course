function getCalculator() {
    let result = 1;
    return {
        getResult:() => {return result},
        plus:(value) => {result += value},
        minus:(value) => {result -= value},
        miltiply:(value) => {result *= value},
        divide:(value) => {result /= value},
    }
}
const calculator = getCalculator()
console.log(calculator.plus(1))
console.log(calculator.minus(1))
console.log(calculator.miltiply(2))
console.log(calculator.divide(2))

