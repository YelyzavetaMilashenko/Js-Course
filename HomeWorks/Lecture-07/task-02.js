// № 2
let strings = ["bbllkw", "oox", "ejjuyyy", "plmiis", "xxxpzgpspsa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
const recursion = (arr, i = 0, longestString = []) => {
if(arr.length === i) {
    return longestString
}

const firstLongString = longestString[0]
const currentString = arr[i]
  
if (firstLongString && currentString.length > firstLongString.length) {
    longestString = [currentString]
} 

if (!firstLongString || currentString.length === firstLongString.length) {
  longestString.push(currentString)
  }

  return recursion(arr, i +1 , longestString)
}

console.log(recursion(strings))
    

// const recursionTest = (arr, i = 0, longestStrings = []) => {
//     if (arr.length === i) {
//         return longestStrings
//     }

//     const firstLongString = longestStrings[0]
//     const currentString = arr[i]

//     if (!firstLongString || currentString.length === firstLongString.length) {
//         longestStrings.push(currentString)
//     }

//     if (firstLongString && currentString.length > firstLongString.length) {
//         longestStrings = [currentString]
//     }

//     return recursionTest(arr, i + 1, longestStrings)
// }

// console.log(recursionTest(strings))

