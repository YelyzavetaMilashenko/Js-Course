// № 2
const users = []
let sum = 'пользователи : ';
let count = 0;
while (true) {
  const user = prompt("Введите имя", '');
  if (!user) 
  { sum += `Всего пользователей : ${count}`
    break;
  }
  // sum += `${user}, `;
  users.push(user)
count++
}
console.log (sum)
