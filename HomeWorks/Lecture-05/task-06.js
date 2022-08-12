// № 6 
let arr = [0, 1, 4, 1, 'bob', 'BOB', 'sam', 'bOb', ]
function without (array, elemets) {
  return array.filter((item) => !elemets.includes(item))
}
const result = without(arr , [1])
console.log(result)

// const str = 'QfrGHyj'  
// console.log (str.toLowerCase())
