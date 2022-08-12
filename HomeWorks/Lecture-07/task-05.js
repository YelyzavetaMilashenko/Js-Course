// № 5
let str = 'string'
let ignoreLetters = ['s', 'g']
let result = Array.prototype.filter.call(str, (item) => !ignoreLetters.includes(item)).join('')
console.log(result)
