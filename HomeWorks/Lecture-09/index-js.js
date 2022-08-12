// № 1
// const wait = (ms) => {
//     let end = Date.now() + ms

//     if (Date.now() === end) {
//         return console.log('Прошло 5 секунд')
//     }

//     return wait()
// }

// console.log(wait(5000))


// const wait = (ms) => {
// 	const end = Date.now() + ms
// 	while (Date.now() < end) continue
// }

// wait(5000)
// console.log('Bye!') // через 5 секунд

// № 2
// function queue() {
//     const arrQueue = []

//     function add(element) {
//         arrQueue.push(element)
//     }

//     function remove() {
//         arrQueue.shift()
//     }

//     function getArr () {
//         return [...arrQueue]
//     }

//     return {
//         add, remove, getArr
//     }
// }
// const turn = queue()
// turn.add('Bob')
// turn.add('Nick')
// turn.remove()
// turn.add('Ann')
// console.log(turn.getArr())

// № 3
// const obj = {
//     name: 'Bob', 
//     age: 25, 
//     gender: 'male', 
//     phone: +111111111,
//     education: 'university',
//     work: 'meneger',
// }

// function forPromise(resolved, rejected) {
// 	setTimeout(() => {
// 		const result = Math.random();
// 		if (result > 0.3) {
// 			resolved(obj);
// 		} 
//         try {
//             throw Error  ('Ошибка синтаксиса')
//         } catch(e) {
//             rejected(e)
//         }
// 	}, 5000);
// }


// const pro = new Promise(forPromise);

// console.log('Loader: true!')

// pro
// 	.then((res) => {
	// 	console.log('Promise resolve ', pro)
	// 	return res
	// })
	// .then((res) => {
	// 	console.log('Show result of Promise ', res)
	// 	return res
	// })
	// .then((res) => {
    //     console.log('Show the name ', res.name)
    //     return res
    // })
    // .then((res) => {
    //     console.log('Show the phone', res.phone)
    //     return res
    // })
    // .then((res) => {
    //     console.log('Show info', res.name, res.gender, res.age)
    //     return res
    // })
	// .catch((err) => console.log(err))
	// .finally(() => console.log('DONE !!! Loader: false!'))

// № 4
// const obj = {
//     name: 'Bob', 
//     age: 25, 
//     gender: 'male', 
//     phone: +111111111,
//     education: 'university',
//     work: 'meneger',
// }

// let err = new Error ('Ошибка синтаксиса')

// function forPromise(resolved, rejected) {
// 	setTimeout(() => {
// 		const result = Math.random();
// 		if (result > 0.99) {
// 			resolved(obj);
// 		}
//         try {
//             throw Error  ('Ошибка синтаксиса')
//         } catch(e) {
//             rejected(e)
//         }
// }, 5000);
// }

// const pro = new Promise(forPromise);

// console.log('Loader: true!')

// const asyncPromise = async () => {
//     try {
//         const aw1 = await pro;
//         console.log ('Promise resolve ', pro)
//         console.log('Show result of Promise ',aw1)
//         console.log('Show the name ', aw1.name)
//         console.log('Show the phone', aw1.phone)
//         console.log('Show info',aw1.name, aw1.gender, aw1.age)
//     } catch (err) {
//         console.log(err.name , err.message)
//     } finally{
//         console.log('DONE !!! Loader: false!')
//     }
// };

// asyncPromise()

// № 5
// console.log(1)
// function fu () {
// 	console.log(2)
// }
// promise = new Promise(function (res, rej) {
// 	console.log(3)
// 	res()
// })
// setTimeout(() =>console.log(11), 0)
// Promise.resolve().then(() => console.log(4)).finally(() => console.log(5))

// promise.then(() => console.log(6)).then(() => console.log(7)).then(() => console.log(8)).finally(() => console.log(9))

// setTimeout(() =>console.log(12), 0)
// setTimeout(() =>console.log(13), 10)
// fu()
// console.log(10)
// fu()
