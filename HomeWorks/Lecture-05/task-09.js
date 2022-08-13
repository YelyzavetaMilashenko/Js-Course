// № 9
const arr = [10, 4, 6, 8, 9, 11]
const minNumb = arr.reduce((prev, item, i, arr) => Math.min(prev,item))
console.log(minNumb)
