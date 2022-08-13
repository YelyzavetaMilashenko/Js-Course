// № 1
//  Вобщем , я по всей видимости не поняла как эту задачу нужно сделать .
// Я думала , что нужно что-то вроде той задачи что ты делал на лекции только с помощью рекурсии .

// const wait = (ms) => {
// 	const end = Date.now() + ms
// 	while (Date.now() < end) continue
// }
// wait(5000)
// console.log('Bye!') // через 5 секунд

// Но у меня это сделать не получилось . Это лучшее из того что было :

// const end = Date.now() + 5000
// const wait = (ms) => {
//     if (Date.now() <= end) {
//         return console.log('Прошло 5 секунд')
//     }

//     return wait(Date.now())
// }

// wait()
// console.log('ddd')


console.log('Request data...')
const p = new Promise(function(resolve, reject){
    let rand = Math.random()
        console.log(rand)
        if (rand <= 0.7) {
    setTimeout(() => {
        console.log('Preparing data...')    
        const Alex = {
                name: 'Alex', 
                age: 25, 
                gender: 'male',
                country: 'Ukraine',
                married: false,
                education: 'KhNU',
                job: 'front-end developer',
                pet: 'dog'
            } 
            setTimeout (() => {
                 console.log('Data received', Alex)
                }, 2000)
        resolve(Alex)
    }, 2000)
} else {
    throw "Error"
}
})


p.then(data => {
    return new Promise((resolve,reject) => {
        setTimeout (() => {
            resolve(data)
            }, 2000)
    })
}).then(clientData => {
    console.log('name: ', clientData.name)
    return clientData
}).then(clientData => {
    console.log('age: ', clientData.age)
    return clientData
}).then(clientData => {
    console.log('gender: ', clientData.gender)
    return clientData
}).then(clientData => {
    console.log('country: ', clientData.country)
    return clientData
}).then(clientData => {
    console.log('married: ', clientData.married)
    return clientData
}).then(clientData => {
    console.log('education: ', clientData.education)
    return clientData
}).catch(errr => console.log(errr))
.finally(() => console.log('DONE !!! Loader: false!'))
