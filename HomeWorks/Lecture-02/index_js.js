// № 1
// function sum(a,b)   {
//     return a + b;
// }
// let result = sum(5,11)
// alert (result)

// let num1 = +prompt('Введите первое число:')
// let num2 = +prompt('Введите второе число:')
// function sum(num1,num2){ 
//     let result=num1+num2
//     alert(result)
// }
// sum(num1,num2)

// № 2
// const userName = prompt('Enter your name :')
// function sayHiToUser (userName) {
//     alert ('Hello, ' +userName )
// }
// sayHiToUser(userName)

// let names = ['Dev', 'Josh', 'Andrew', 'Oleh', 'Nik']
// for(let i = 0 ;i < names.length;i++){
//     console.log('Hello ' + names[i])
// }

// № 3
// function multiply(a,b)   {
//     return a * b;
// }
// let result = multiply(3,4)
// alert (result)

// let numb = [1,2,3]
// for(let i = 0; i < numb.length; i++){
//     console.log(numb[i])
//     alert(i*numb[i])
// }

// № 4
// let num1 = [3,7,5,]
// let num2 = [2,9,6]
// function numSum(array){
// let sum = 0;
// for(let i = 0; i < array.length; i++){
//     sum += array[i];
//     } 
// console.log(sum);
// }

// if (numSum(num1)>numSum(num2)) {
//     alert ('Num1 > Num2')
// } else {
//     alert ('Num1 < Num2') 
// }

// № 5 
// let str1 = ['Hello', 'Hello world', 
//            'Hello my friend'];

// let lgth1=0;
// function maxString (str) {
// for(let i=0; i < str.length; i++){
//     if(str[i].length > lgth1){
//         lgth1 = str[i].length;
//     }      
// } return lgth1;
//  }
//    console.log(maxString(str1) )
 
// № 6
// let num1 = +prompt('Введите первое число:')
// let num2 = +prompt('Введите второе число:')

// function isInteger(num) {
//     return (num ^ 0) === num;
//   }
// console.log(isInteger(num1))
// console.log(isInteger(num2))

// function getNumberSum (num1,num2){
//     let result=num1+num2
//     alert(result)
// }
// getNumberSum(num1,num2)

// // № 7 
// let num = 1
// function checkNum(){
//     return typeof(num)
// }
// console.log(checkNum())
// let str = 'Hello'
// function checkStr(){
//     return typeof(str)
// }
// console.log(checkStr())
// let tr = true
// function checkTr(){
//     return typeof(tr)
// }
// console.log(checkTr())

// let un 
// function checkUn(){
//     return typeof(un)
// }
// console.log(checkUn())

// let user = {     
//     name: "John",  
//     age: 30        
//   };
//   function checkUser (){
//     return typeof(user)
//   }
//   console.log(checkUser())

//   function showMessage() {
//     alert( 'Всем привет!' );
//     return typeof(alert)
//   }
//   console.log(showMessage())

// // № 8
// let n1 = 7
// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
// }
// console.log (factorial(n1))