// № 3
// Как использовать throw Error() я вроде разобралась , но по всей видимости не до конца.
// Так как , когда я его писала finally не выполняется, по этому я написала так :
const obj = {
    name: 'Bob', 
    age: 25, 
    gender: 'male', 
    phone: +111111111,
    education: 'university',
    work: 'meneger',
}

let err = new Error ('Ошибка синтаксиса')

function forPromise(resolved, rejected) {
	setTimeout(() => {
		const result = Math.random();
		if (result > 0.3) {
			resolved(obj);
		}
		rejected(err);
	}, 5000);
}


const pro = new Promise(forPromise);

console.log('Loader: true!')

pro
	.then((res) => {
		console.log('Promise resolve ', pro)
		return res
	})
	.then((res) => {
		console.log('Show result of Promise ', res)
		return res
	})
	.then((res) => {
        console.log('Show the name ', res.name)
        return res
    })
    .then((res) => {
        console.log('Show the phone', res.phone)
        return res
    })
    .then((res) => {
        console.log('Show info', res.name, res.gender, res.age)
        return res
    })
	.catch((err) => {console.log(err.name, err.message) })
	.finally(() => console.log('DONE !!! Loader: false!'))

