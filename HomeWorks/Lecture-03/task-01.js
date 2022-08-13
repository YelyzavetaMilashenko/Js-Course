// № 1
const users = {
    "John": 28,
    "Mark": 30,
    "David": 25,
    "Richard": 42,
    "Bob": 12,
    "Tom": 61,
};
function sumUsers(users) {

    let sum = 0;
    for (let user in users) {
      sum += users[user];
    }
  
    return sum; // 650
  }
  console.log (sumUsers(users))
