// № 4 
let arr1 = [1, 2, 3, 4]
let arr2 = [1, 2, 3]
let result = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])
console.log(result)
