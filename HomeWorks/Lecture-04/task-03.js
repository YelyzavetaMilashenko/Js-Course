//  № 3
function calcSum (numb) {
    alert(numb+2)
}
function number (num1){
    num1(4)
}
const result1 = number
result1(calcSum)

// Или такой вариант решения 

function calcSum (numb) {
   return function number (num1){
    return numb + num1
}
}
const result = calcSum(3)
console.log(result(4))
