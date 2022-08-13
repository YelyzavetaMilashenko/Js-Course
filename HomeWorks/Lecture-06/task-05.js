// № 5
const arr = [1, 24, 'Bob', true, null, { name: 'Sam', age: 10 }, 5];
function createObj (array) {
    let obj = {};
    array.forEach((item, index) => {
    obj['index'+index]=item
        
    });
    return obj
}
console.log (createObj(arr))


// const obj = {...arr}
// function createObj (array) {
//     Object.keys(this).forEach(key => {
//         console.log(`index : ${key} : ${this[key]}`)
//     });
// }
// createObj.call(arr)
