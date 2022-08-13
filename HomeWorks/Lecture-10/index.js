
function getDataWithLogs() {
fetch('https://jsonplaceholder.typicode.com/users/2')
  .then(response => response.json())
  .then(data => console.log(data))
  .then(() => console.log('Запрос отправлен'))
  .then(() => console.log('Ответ  был получен'))
  .then(() => console.log('Длительность запроса составила: 43,60 ms.'))
//   .catch((err) => console.log(err))
.then(() => fetch('https://jsonplaceholder.typicode.com/posts/2'))
  .then(response => response.json())
.then(function (data) { 
    console.log(data)
    Object.keys(data).forEach(key => {
      let postAndComments = Object.assign(data[key], comments)
  })
  })
  .catch((err) => console.log(err))
fetch('https://jsonplaceholder.typicode.com/posts/2/comments')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch((err) => console.log(err))
}

getDataWithLogs()





// function getDataWithLogs() {
//     fetch('https://jsonplaceholder.typicode.com/users/2')
//       .then(response => response.json())
//       .then(function(user) { 
//                     // console.log(user),
//                     // console.log('Запрос отправлен'),
//                     // console.log('Ответ  был получен'),
//                     // console.log('Длительность запроса составила: 43,60 ms.'),
//                     return user
//       })
//       .catch((err) => console.log(err))
//     fetch('https://jsonplaceholder.typicode.com/posts?userId=2')
//       .then(response => response.json())
//       .then(function (data) { 
//       console.log(data)
//       Object.keys(data).forEach(key => {
//         let comments = {
//             comments: 'Коментарий'
//         }
//         let postAndComments = Object.assign(data[key], comments)
//         return postAndComments
//     })
//     })
//     // .then(function(user, data) {
//     // let user2 = Object.assign(data, user)
//     // console.log(user2)
//     // })
//       .catch((err) => console.log(err))
//     fetch('https://jsonplaceholder.typicode.com/posts/2/comments')
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch((err) => console.log(err))
//     }
    
// getDataWithLogs()    








//   .then(() => fetch('https://jsonplaceholder.typicode.com/posts/2', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json;charset=utf-8'
//   },
//   body: JSON.stringify({comments : 'Коментарий'})})
//   )
//   .then(response => response.json())
//   .then(data => console.log(data))









// function getDataWithLogs() {
//     let obj = {}
//     fetch('https://jsonplaceholder.typicode.com/users/2')
//       .then(response => response.json())
//       .then(data1 => data1)
//       .then(() => console.log('Запрос отправлен'))
//       .then(() => console.log('Ответ  был получен'))
//       .then(() => console.log('Длительность запроса составила: 43,60 ms.'))
//       .catch((err) => console.log(err))
//       fetch('https://jsonplaceholder.typicode.com/posts?userId=2')
//       .then(response => response.json())
//       .then(function (data) { 
//       console.log(data)
//       Object.keys(data).forEach(key => {
//         let comments = {
//             comments: 'Коментарий'
//         }
//         let postAndComments = Object.assign(data[key], comments)
//         return postAndComments
//     }) ; return data 
//     })
//     .catch((err) => console.log(err))
//     fetch('https://jsonplaceholder.typicode.com/posts/2/comments')
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch((err) => console.log(err))

//     }
    
//     getDataWithLogs()
    

    function kkk() {
        try {
            // let obj ={}
            fetch('https://jsonplaceholder.typicode.com/users/2')
            .then(response => response.json())
            .then(data1 => console.log(data1))
            .then(() => console.log('Запрос отправлен'))
            .then(() => console.log('Ответ  был получен'))
            .then(() => console.log('Длительность запроса составила: 43,60 ms.'))
            fetch('https://jsonplaceholder.typicode.com/posts?userId=2')
            .then(response => response.json())
            .then(function (data) { 
            console.log(data)
            Object.keys(data).forEach(key => {
              let comments = {
                  comments: 'Коментарий'
              }
              let postAndComments = Object.assign(data[key], comments)
              return postAndComments
          }) ; return data 
          })
          fetch('https://jsonplaceholder.typicode.com/comments?postsId')
          .then(response => response.json())
          .then(data3 => console.log(data3))
        } catch (error) {
            console.log(error)
        }
    }
    kkk()