// № 7
let arr = [1, 2, 3, 4, 5, 3]
function without (arr, elemets) {
    return arr.filter((item) => !elemets.includes(item) )
  }
  const result = without(arr, [1, 3])
  console.log(result)
