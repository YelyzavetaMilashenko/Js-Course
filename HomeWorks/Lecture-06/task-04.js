// № 4
const obj1 = { a: 1, b: 1 };
const obj2 = { a: 1, b: 1 };
function isEqual(a, b) {
    for(let key in a) {
        if(a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}
console.log(isEqual(obj1, obj2))
