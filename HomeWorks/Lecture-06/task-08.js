// № 8
const userBob = {
	name: 'Bob',
	age: 21,
	gender: 'male',
	married: false,
	pets: [{name: 'Rex', age:10}, {name: 'Ron', age: 3}],
	breaks: ['11:00', '17:00'],
	favoriteMovie: {
		name: 'Avatar',
		year: 2009,
		info: {
			country: 'USA',
			director: 'James Cameron'
		}
	}
}
let userBobClone = JSON.parse(JSON.stringify(userBob))
for (let key in userBobClone) {
    delete userBobClone[key]
}
console.log(userBobClone)
