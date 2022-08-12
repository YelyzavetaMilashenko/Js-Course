// № 2
const userName = prompt('Enter your name :')
function sayHiToUser (userName) {
    alert ('Hello, ' +userName )
}
const names = ['Dev', 'Josh', 'Andrew', 'Oleh', 'Nik']
for(let i = 0 ;i < names.length;i++){
    console.log('Hello ' + names[i])
}
sayHiToUser(userName)