const button1 = document.querySelector('.Click1')
const parent = document.getElementById("res1");

button1.addEventListener('click', res1)

// function res1 () {
// button1.disabled = true
//    fetch('https://jsonplaceholder.typicode.com/users/2')
//   .then(response => response.text())
//   .then(user => document.getElementById('res1').append(user))

//   const newButton2 = document.createElement("button");
//   newButton2.classList = ['Click2']
//   newButton2.addEventListener('click', res2)
//   newButton2.innerHTML = "<span>Get posts</span>"

//   parent.appendChild(newButton2);
// }

// function res2 () {
//    newButton2.disabled = true

//    fetch('https://jsonplaceholder.typicode.com/posts?userId=2')
//    .then(response => response.text())
//    .then(posts => document.getElementById('res1').append(posts))

//    const newButton3 = document.createElement("button");

   
//    newButton3.innerHTML = "<button class='Click3' onclick = 'res3()'>Get comments</button>";
//    let parent = document.getElementById("res1");
//    let child =  parent.appendChild(newButton3);
// }

// function res3() {
//    fetch('https://jsonplaceholder.typicode.com/comments?postId=11&postId=12&postId=13&postId=14&postId=15&postId=16&postId=17&postId=18&postId=19&postId=20')
//    .then(response => response.text())
//    .then(comments => document.getElementById('res1').append(comments))

// }



function res1 () {
   button1.disabled = true
      fetch('https://jsonplaceholder.typicode.com/users/2')
     .then(response => response.text())
     .then(user => document.getElementById('res1').append(user))
   
     const newButton2 = document.createElement("button");

   //   newButton2.innerHTML = "<button class='Click2' onclick = 'res2()'>Get posts</button>";

     newButton2.classList = ['Click2']
     newButton2.addEventListener('click', res2)
     newButton2.innerHTML = "<span>Get posts</span>"

     parent.appendChild(newButton2);
   }
   
   function res2 () {
   
      fetch('https://jsonplaceholder.typicode.com/posts?userId=2')
      .then(response => response.text())
      .then(posts => document.getElementById('res1').append(posts))
   
      const newButton3 = document.createElement("button");

      newButton3.classList = ['Click3']
      newButton3.addEventListener('click', res3)
      newButton3.innerHTML = "<span>Get comments</span>"

      // newButton3.innerHTML = "<button class='Click3' onclick = 'res3()'>Get comments</button>";
      parent.appendChild(newButton3);
   }
   
   function res3() {

      fetch('https://jsonplaceholder.typicode.com/comments?postId=11&postId=12&postId=13&postId=14&postId=15&postId=16&postId=17&postId=18&postId=19&postId=20')
      .then(response => response.text())
      .then(comments => document.getElementById('res1').append(comments))
   }   

