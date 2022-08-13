// № 7
const users = [
    { name: 'Bob', age: 20 },
    { name: 'Sam', age: 10 },
    { name: 'Anna', age: 29 },
    { name: 'Jim', age: 15 },
    { name: 'Alex', age: 45 },
    { name: 'Mick', age: 23 },
];
let usersJson = JSON.stringify(users, null, 10)
console.log (usersJson)
