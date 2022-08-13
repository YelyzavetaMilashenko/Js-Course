// № 8
// const arr = ['one', 'two', 'three', 'four', 'five']
// const randomElement = Math.floor(Math.random() * arr.length)
// const result = arr[randomElement]
// console.log(result)


const arr = ['one', 'two', 'three', 'four', 'five']
// const randomElement = arr.reduce(() => Math.floor(Math.random() * arr.length))
// const result = arr[randomElement]
// console.log(result)


function randomElem(array) {
    const index = Math.floor(Math.random() * array.length)
return array[index]
}
console.log(randomElem(arr))
