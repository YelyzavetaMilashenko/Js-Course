// № 3
const a = 3
const b = 7
const result = function pow (num1, num2) {
if (num2 === 1) return num1
return num1 * pow(num1, num2 - 1)
}
console.log(result(a,b))
