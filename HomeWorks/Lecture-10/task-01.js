// Используя ресурс https://jsonplaceholder.typicode.com/

// Написать функцию getDataWithLogs()
// Эта функция должна делать запрос на какой то URL и возвращать полученные с него данные.
// Так же она должна показывать в консоль следующие сообщения с информаией:
// Запрос на ендпоинт "какой/то/урл" был отправлен
// Ответ был получен
// Длительность запроса составила {посчитанное время}

// Сделайте запрос на /users. Только так чтобы вернулся 1 конкретный пользователь. там есть примеры.

// Потом получите посты для этого юзера

// Потом получите коментарии которые были оставленны для этого поста

// Потом расширьте обьекты постов, добавив в них свойство comments(array of comments) Соответсвенно к каждому посту должны быть добавленны коментарии которые относятся к этому посту

// Потом рассширьте обьект юзера добавив туда массив постов.

// Покажите в консоль финальный результа
// Сделайте две версии. Одна используя promise. Вторая используя async await


function getDataWithLogs() {
  let userInfo
fetch('https://jsonplaceholder.typicode.com/users/2')
  .then(response => response.json())
  .then(user => console.log(user))
  .then(() => console.log('Запрос отправлен'))
  .then(() => console.log('Ответ  был получен'))
  .then(() => console.log('Длительность запроса составила: 43,60 ms.'))

  // .then((user) => userInfo = user)
  // .catch((err) => console.log(err))
  .then(() => fetch('https://jsonplaceholder.typicode.com/posts?userId=2')
  ).then(response => response.json())
  .then(posts => console.log(posts))
  .then(() => fetch('https://jsonplaceholder.typicode.com/comments?postId=11&postId=12&postId=13&postId=14&postId=15&postId=16&postId=17&postId=18&postId=19&postId=20')
  ).then((response) => response.json())
  .then(comments => console.log(comments))
}

// fetch('https://jsonplaceholder.typicode.com/posts?userId=2')
//   .then(response => response.json())
//   .then(function (data) { 
//   console.log(data)
//   Object.keys(data).forEach(key => {
//     let comments = {
//         comments: 'Коментарий'
//     }
//     let postAndComments = Object.assign(data[key], comments)
//     return postAndComments
// })
// })
// .catch((err) => console.log(err))

// fetch('https://jsonplaceholder.typicode.com/posts/2/comments')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch((err) => console.log(err))


getDataWithLogs()

// async function getDataWithLogs1 () {
//     try{
//     let aw1 = await fetch('https://jsonplaceholder.typicode.com/users/2')
//     let result = await aw1.json()
//     console.log(result)

//     let aw2 = await fetch('https://jsonplaceholder.typicode.com/posts?userId=2')
//     let result2 = await aw2.json()
//     console.log(result2)
//     let newPost = await function (data) {
//             Object.keys(data).forEach(key => {
//                       let comments = {
//                           comments: 'Коментарий'
//                       }
//                       let postAndComments = Object.assign(data[key], comments)
//                       return postAndComments
//                   })
//           }
//           newPost(result2)

//     let aw3 = await fetch('https://jsonplaceholder.typicode.com/posts?userId=2/comments')
//     let result3 = await aw3.json()
//     console.log(result3)

//     let aw4 = Object.assign(result, result2)
//     console.log(aw4)
// } catch {(err) =>
//     console.log(err)
// }
// }

// console.log('Запрос отправлен')
// console.log('Ответ  был получен')
// console.log('Длительность запроса составила: 43,60 ms.')

// getDataWithLogs1()