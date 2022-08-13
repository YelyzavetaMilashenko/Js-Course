//  № 1
const a = { foo: "bar", obj: { a: 1, b: 2 } };
function deepClone(obj) {
    if (obj === null) return null;
    let clone = Object.assign({}, obj);
    Object.keys(clone).forEach(
      key =>
        (clone[key] =
          typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key])
    );
  
    return Array.isArray(obj) && obj.length
      ? (clone.length = obj.length) && Array.from(clone)
      : Array.isArray(obj)
    ? Array.from(obj)
    : clone;
};
const b = deepClone(a);
console.log(b)
