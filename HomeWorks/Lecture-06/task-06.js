// № 6
const users = [
    	{ name: 'Bob', age: 20 },
    	{ name: 'Sam', age: 10 },
    	{ name: 'Anna', age: 29 },
    	{ name: 'Jim', age: 15 },
    	{ name: 'Alex', age: 45 },
    	{ name: 'Mick', age: 23 },
    ];

// 1 вариант (то что я сама сделала)

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

// function isEmpty() {
//     for (let key in users) {
//         if (users[key].age) {
//          return true   
//         } else {
//             return users
//         }
//     }
//   }
//   console.log (isEmpty(users))

// 2 вариант (то что мы все сделали)
// function sortByAge (array, property) {
//     let result = []
//     for (let keys of array) {
//         if (property in keys) {
//         result = array.sort((a, b) => a[property] > b[property] ? 1 : -1);
//            return result
//     } else {
//         return array
//     }
// }
// }
// console.log(sortByAge(users, 'age'))