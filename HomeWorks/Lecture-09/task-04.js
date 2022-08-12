// № 4 
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

const asyncPromise = async () => {
    try {
        const aw1 = await pro;
        console.log ('Promise resolve ', pro)
        console.log('Show result of Promise ',aw1)
        console.log('Show the name ', aw1.name)
        console.log('Show the phone', aw1.phone)
        console.log('Show info',aw1.name, aw1.gender, aw1.age)
    } catch (err) {
        console.log(err.name , err.message)
    } finally{
        console.log('DONE !!! Loader: false!')
    }
};

asyncPromise()
