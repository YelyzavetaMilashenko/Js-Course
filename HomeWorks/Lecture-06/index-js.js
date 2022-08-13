// № 1
// const userBob = {
//     name: 'Bob',
//     age: 21,
//     gender: 'male',
//     married: false,
// }
// delete userBob.age
// userBob.gender = 'female'
// userBob.pets = [{name: '',age: 0, classOfAnimal: 'dog'}]
// console.log(userBob)

// № 2
// const userBob = {
//     name: 'Bob',
//     age: 21,
//     gender: 'male',
//     married: false,
// }
// function isObject (item) {
//     return (typeof item === "object" && !Array.isArray(item) && item !== null && typeof item !== 'function');
//   }
//   console.log(isObject(userBob))

// № 3
// const obj = {
//     a: 1,
//     b: 2 , 
//     c: ['b'],
// }
// function getObjWithout(object, ...args) {
//     const newObject = {...object};
//     args.forEach(args => delete newObject[args])
// return newObject
// }
// console.log(getObjWithout(obj, 'b', 'c'))

// № 4
// const obj1 = { a: 1, b: 1 };
// const obj2 = { a: 1, b: 1 };
// function isEqual(a, b) {
//     for(let key in a) {
//         if(a[key] !== b[key]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isEqual(obj1, obj2))

// № 5
// const arr = [1,24,'Bob', true, null, { name: 'Sam', age: 10 }, 54]
// function obj1 () {
//     const obj = Object.assign({}, arr)
//     const keys = Object.key(obj)
// }
// console.log(obj1())

// № 6
// const users = [
//     	{ name: 'Bob', age: 20 },
//     	{ name: 'Sam', age: 10 },
//     	{ name: 'Anna', age: 29 },
//     	{ name: 'Jim', age: 15 },
//     	{ name: 'Alex', age: 45 },
//     	{ name: 'Mick', age: 23 },
//     ];

// let sortUsersName =  users.sort(function sortByProp(a, b) {
//     if (a.name > b.name) {
//      return 1;
//     }
//     if (a.name < b.name) {
//      return -1;
//     }
//      return 0;
//     });
// console.log(sortUsersName)

// let sortUsersAge =  users.sort(function sortByProp(a, b) {
//     if (a.age > b.age) {
//      return 1;
//     }
//     if (a.age < b.age) {
//      return -1;
//     }
//      return 0;
//     });
// console.log(sortUsersAge)

// № 7
// const users = [
//     { name: 'Bob', age: 20 },
//     { name: 'Sam', age: 10 },
//     { name: 'Anna', age: 29 },
//     { name: 'Jim', age: 15 },
//     { name: 'Alex', age: 45 },
//     { name: 'Mick', age: 23 },
// ];
// let usersJson = JSON.stringify(users)
// console.log (usersJson)

// № 8
// const userBob = {
// 	name: 'Bob',
// 	age: 21,
// 	gender: 'male',
// 	married: false,
// 	pets: [{name: 'Rex', age:10}, {name: 'Ron', age: 3}],
// 	breaks: ['11:00', '17:00'],
// 	favoriteMovie: {
// 		name: 'Avatar',
// 		year: 2009,
// 		info: {
// 			country: 'USA',
// 			director: 'James Cameron'
// 		}
// 	}
// }
// let userBobClone = JSON.parse(JSON.stringify(userBob))
// for (let key in userBobClone) {
//     delete userBobClone[key]
// }
// console.log(userBobClone)