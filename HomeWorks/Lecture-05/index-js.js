// № 1
// const num = 3;
// const val = 'a';
// const fill = (arraySize, value) => new Array(arraySize).fill(value);
// console.log(fill(num, val))

// № 2
// let arr = [1, '', 'string', 6, 8, '--', ]
// arr = arr.filter((prev, item, i, arr) => {
//     return prev != false
// })
// console.log(arr)

// № 3 
// let arr = [1, 2, 3, 1, 4]
// arr = arr.filter((prev, item, i, arr) => { 
//     return prev !== 1, prev !== 2
// })
// console.log(arr)

// № 4 
// let arr1 = [1, 2, 3, 4]
// let arr2 = [1, 2, 3]
// let result = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])
// console.log(result)
    
// № 5
// const arr = [1, 2, 3, 4, 5]
// const result = arr.slice(0,2)
// const result1 = arr.slice(2,4)
// const result2 = arr.slice(4,5)
// const result3 = `[[${result}], [${result1}], [${result2}]]`
// console.log(result)
// console.log(result1)
// console.log(result2)
// console.log(result3)

// Решение в интернете
// const data = [1, 2, 3, 4, 5, 6, 7];
// const chunk = (array, size) => {
//     const chunkedArr = [];
//     let index = 0;
//     while (index < array.length) {
//       chunkedArr.push(array.slice(index, size + index));
//       index += size;
//     }
//     return chunkedArr;
//   };
//   console.log(chunk(data, 2))


// № 6
// let arr = [0, 1, 4, 1, 'bob', 'BOB', 'sam', 'bOb', ]
// let value = 1
// const array = arr.filter((prev, item, i, arr) => { 
//     return prev !== value
// })
// console.log(array)
// array.splice(2, 2)
// array.splice(3, 1)
// console.log (array)

// const array = arr.filter((item,index) => {
// return index === arr.indexOf(item)
// } )
// console.log(array)

// const array = arr.reduce ((prev, item, i, arr) => {
//     return prev.includes(item) ? prev : [...prev, item]
// } ,[] )
// console.log(array)

// № 7
// let value = 3
// let arr = [1, 2, 3, 4, 5, 3]
// arr = arr.filter((prev, item, i, arr) => { 
//     return prev !== value
// })
// console.log(arr)

// const array = [0,1,2,3,1,2,5]
// const result = (arr) => {
//   return arr.filter((el, id) => arr.indexOf(el) === id);
// }
// console.log(result(array));

// № 8
// const arr = ['one', 'two', 'three', 'four', 'five']
// const randomElement = Math.floor(Math.random() * arr.length)
// const result = arr[randomElement]
// console.log(result)

// № 9
// const arr = [1, 4, 6, 8, 9, 11]
// const minNumb = arr.reduce((prev, item, i, arr) => Math.min(prev))
// console.log(minNumb)

// № 10
// const arr = [{width: 10, height: 20},
//              {width: 12, height: 26}, 
//              {width: 14, height: 50}, 
//              {width: 6, height: 11}]
// const widthTotal = arr.reduce((prev, item, i, arr) => prev + item.width, 0)
// const heightTotal = arr.reduce((prev, item, i, arr) => prev + item.height, 0)
// const space = arr.reduce((prev, item, i, arr) => heightTotal * widthTotal, 0)
// const quantity = arr.reduce((prev, item, i, arr) => arr.length)
// const fulInfo = arr.reduce((prev, item, i, arr) => {
//     return {
//         widthTotal: `${widthTotal}`,
//         heightTotal: `${heightTotal}`,
//         space: `${space}`,
//         quantity: `${quantity}`,
//     }
// })
// console.log(fulInfo)