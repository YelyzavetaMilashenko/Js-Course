// 5. разобраться почему в консоль выводятся значения в такой последовательности

console.log(1)
function fu () {
	console.log(2)
}
promise = new Promise(function (res, rej) {
	console.log(3)
	res()
})
setTimeout(() =>console.log(11), 0)
Promise.resolve().then(() => console.log(4)).finally(() => console.log(5))

promise.then(() => console.log(6)).then(() => console.log(7)).then(() => console.log(8)).finally(() => console.log(9))

setTimeout(() =>console.log(12), 0)
setTimeout(() =>console.log(13), 10)
fu()
console.log(10)
fu()






