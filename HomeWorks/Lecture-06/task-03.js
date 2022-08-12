// № 3
const obj = {
    a: 1,
    b: 2 , 
    c: ['b'],
}
function getObjWithout(object, ...args) {
    const newObject = {...object};
    args.forEach(args => delete newObject[args])
return newObject
}
console.log(getObjWithout(obj, 'b', 'c'))
