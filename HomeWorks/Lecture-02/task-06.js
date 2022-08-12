// № 6
let num1 = +prompt('Введите первое число:')
let num2 = +prompt('Введите второе число:')

function isInteger(num) {
    return (num ^ 0) === num;
  }
console.log(isInteger(num1))
console.log(isInteger(num2))

function getNumberSum (num1,num2){
    let result=num1+num2
    alert(result)
}
getNumberSum(num1,num2)