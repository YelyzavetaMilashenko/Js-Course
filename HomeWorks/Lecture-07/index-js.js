//  № 1
// const a = { foo: "bar", obj: { a: 1, b: 2 } };
// function deepClone(obj) {
//     if (obj === null) return null;
//     let clone = Object.assign({}, obj);
//     Object.keys(clone).forEach(
//       key =>
//         (clone[key] =
//           typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key])
//     );
  
//     return Array.isArray(obj) && obj.length
//       ? (clone.length = obj.length) && Array.from(clone)
//       : Array.isArray(obj)
//     ? Array.from(obj)
//     : clone;
// };
// const b = deepClone(a);
// console.log(b)

// № 2
// let strings = ["bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsspsa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
// const recursion = (arr, i = 0, longestString = []) => {
//         if(arr.length === i) {
//             return longestString
//         }
//         const currentString = arr[i]
//         if (currentString.length > longestString.length) {

//             longestString = currentString
//         } 
//         return recursion(arr, i +1 , longestString)
//     }
//     console.log(recursion(strings))

// № 3
// const a = 3
// const b = 7
// const result = function pow (num1, num2) {
// if (num2 === 1) return num1
// return num1 * pow(num1, num2 - 1)
// }
// console.log(result(a,b))

// № 4
// const str = 'string'
// const result = Array.prototype.forEach.call(str,(item) => console.log(item))
// console.log(result)

// № 5
// let str = 'string'
// let ignoreLetters = ['s', 'g']
// let result = Array.prototype.filter.call(str, (item) => !ignoreLetters.includes(item)).join('')
// console.log(result)

// № 6
// function sum() {
//     let result = 0;
//     for (let i = 0; i < arguments.length; i++) {
//       result += arguments[i];
//     }
//     return result;
//   }
//   console.log( sum(0, 1, 5, 7) );

// function sum1(...args) { 
//     let sum = 0;
//     for (let arg of args) sum += arg;
//     return sum;
//   }
//   console.log( sum1(1, 2, 3) );

// № 7 
// const myCar = {
//     brand: 'Toyota' ,
//     model: 'C-HR' ,
//     mileage: 17773,
//     maxSpead: 185,
//     midlleSpead: 95,
//     acceleration: 11.1,
//     fuelConsuming: 6.6,
//     drive() {let result = this.mileage + 150 
//                return result },
//     time() {let result = 300 / this.maxSpead
//                return result},
//     consuming() { let result = (300 / 100) * this.fuelConsuming
//                return result }
// }
// console.log(myCar.consuming())