// № 3 
let arr = [1, 2, 3, 1, 4]
function without (arr, elemets) {
  return arr.filter((item) => !elemets.includes(item) )
}
const result = without(arr, [1, 2])
console.log(result)