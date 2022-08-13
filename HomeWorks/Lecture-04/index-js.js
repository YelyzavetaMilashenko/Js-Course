// № 1
// function fahrenheitToCelsius (f) {
//     const w = 1.8;
//     const b = 32;
//     const c = (f - b) / w;
//     return c;
//   };
//   console.log(fahrenheitToCelsius(10))

// № 2
// function countCons (str) {
//     let cons_list ='bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
//     let ccount = 0;
//     for (let i =0;i < str.length; i++){
//         if (cons_list.indexOf(str[i]) != -1) {
//             ccount += 1;
//         }
//     }
//     return ccount   
// }
// console.log(`Согласных букв : ${countCons('Hello')}`)

// function count(str1) {
//   let vowel_list ='aeiouAEIOU';
//   let vcount = 0;
//   for(let i = 0; i < str1.length ; i++) {
//       if (vowel_list.indexOf(str1[i]) !== -1) {
//       vcount += 1;
//     }
//   }
//   return vcount;
// }
// console.log(`Гласных букв : ${count("Hello")}`);

//  № 3
// function calcSum (numb) {
//     alert(numb+2)
// }
// function number (num1){
//     num1(4)
// }
// let result = number
// result(calcSum)

// Или такой вариант решения 

// function calcSum (numb) {
//    return function number (num1){
//     return numb + num1
// }
// }
// const result = calcSum(3)
// console.log(result(4))


// № 4
// function getVisitor() {
//     let i = 1
//     return function() {
//       return i++
//     }
//   }
//   const visitor = getVisitor()
//   console.log(visitor())
//   console.log(visitor())
  
// № 5 
// function getMaxValue (a = 7, b = 9) {
//     return Math.max(a,b)
// }
// function callBack (num1) {
//     console.log(num1)
// }  
// callBack(getMaxValue())

// № 6 
// function sum() {
//     let result = 0;
//     for (let i = 0; i < arguments.length; i++) {
//       result += arguments[i];
//     }
//     return result;
//   }
//   console.log( sum(0,Infinity) );

// № 7
function getCalculator (context) {
 return 
}