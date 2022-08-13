// № 2
const userBob = {
    name: 'Bob',
    age: 21,
    gender: 'male',
    married: false,
}
function isObject (item) {
    return (typeof item === "object" && !Array.isArray(item) && item !== null && typeof item !== 'function');
  }
  console.log(isObject(userBob))
