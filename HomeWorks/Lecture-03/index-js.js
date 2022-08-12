// № 1
// const users = {
//     "John": 28,
//     "Mark": 30,
//     "David": 25,
//     "Richard": 42,
//     "Bob": 12,
//     "Tom": 61,
// };
// function sumUsers(users) {

//     let sum = 0;
//     for (let user in users) {
//       sum += users[user];
//     }
  
//     return sum; // 650
//   }
//   console.log (sumUsers(users))

// № 2
// let sum = 0;

// while (true) {
//   const users = prompt("Введите имя", '');
//   if (!users) break;

//   sum += users;

// }
// console.log (sum)
// alert(users[i]);

// № 3
// let num = 1000;

// while (num > 50) {
// 	num = num / 2;
// }

// console.log(num);

// № 4
// for (var i = 10; i <= 30; i++) {
// 	document.write(i + '<br>');
// } 
// for (var i = 40; i <= 50; i++) {
// 	document.write(i + '<br>');
// } 

// № 5
// for (var i = 0; i <= 100; i++) {
//   if (i % 2 === 0)
// 	document.write(i + '<br>');
// } 

// № 6
// let sum = 0;
// function sumNumb(){
//   for (let i = 0; i <= 100; i++) {
//   sum += i;
// } return sum
// }
//  alert(sumNumb(100));

// № 7
// let num = [2, 3, 4, 5, 7, 9, 10]
// let result = 1;
// for (var i = 0; i < num.length; i++) {
// 	result *= num[i];
// }
// alert(result);

// № 8
// const colors = {green: 'зеленый', 
// red: 'красный', 
// blue: 'голубой', 
// white: 'белый', 
// yellow: 'желтый'} 
// for (const key in colors) {
//   if (colors, key) {
//     const element = colors[key];
//    }

//   console.log(element)
//   console.log(key)
// }

//  № 9
// let num = [2, 3, 4, 5, 7, 9, 10]
// for (let i =0 ; i < num.length; i++) {
// if (num[i] === 4 || num[i] === 6 ){
// console.log ('Есть !')
// break}
// }

// № 10
//  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9.]
// let str
// for (i=0; i<num.length; i++){
// str = num.join('-')
// }
// console.log(str)
// console.log(`-${num[0]}-${num[1]}-${num[2]}-${num[3]}-${num[4]}-${num[5]}-${num[6]}-${num[7]}-${num[8]}-`)
// Это как вариант записи получения такой строки . Что из этого более правильно ?

// № 11
// const date = [ 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun' ]
// for (i=0; i<date.length; i++) {

// }
// console.log(`${date[0]}, ${date[1]}, ${date[2]}, (${date[3]}), ${date[4]}, ${date[5].toUpperCase()}, ${date[6].toUpperCase()}. `)

// № 12
// const user = {
//   name : 'Nik' ,
//   age : 32,
//   work : 'logist' ,
//   phone : +11111111111,
//   sister : 'Olena' ,
//   education : 'yes' , 
//   car : 'Ford',
//   modelCar : 'Mustang',
//   colorCar : 'Black',
//   yearCar : 1987
// }
// for (const key in user) {
// console.log(user[key])
// }

// № 13
// const test2 = ('Sam' || '' || false) && (0 || 9) && 111; => true && true && 111 => 111
// const test3 = (null || '' || undefined || 0) && (NaN || 9) && 111; => 0 && 9 && 111 => 0
// const test4 = (null || 99) && (undefined || NaN) && (NaN || 9) && 111; => 99 && NaN && 9 && 111 => NaN && 9 && 111 => NaN && 111 => NaN
// const test5 = (null || 100 || undefined || NaN) && ( NaN || 9) && 'string'; => 100 && 9 && 'string' => 'string'
// const test6 = ({name: 'Sam'} || '' || undefined || NaN) && (NaN || [1, 2]) && 111; => {name: 'Sam'} && [1, 2] && 111 => 111
// const test7 = (null || '' || {} || NaN) && [] && 111; => {} && [] && 111 => 111
// const test2 = 'Sam' || '' || false && 0 || 9 && 111; => 'Sam' || '' || 0 || 111 => 'Sam' || 0 || 111 => 'Sam' || 111 => Sam
// const test3 = null || '' || undefined || 0 && NaN || 9 && 111; => null || '' || undefined || NaN || 111 => 111
// const test4 = null || 99 && undefined || NaN && NaN || 9 && 111; => null || undefined || NaN || 111 => 111
// const test5 = null || 100 || undefined || NaN && NaN || 9 && 'string'; => null || 100 || undefined || NaN || 'String' => 100
// const test6 = {name: 'Sam'} || '' || undefined || NaN && NaN || [1, 2] && 111; => {name: 'Sam'} || '' || undefined || NaN || 111 => {name: 'Sam'}
// const test7 = null || '' || {} || NaN && [] && 111; => null || '' || {} || NaN => {}

//  № 14 
// if (item > item2) {
//   console.log('first')
// } else {
//   console.log('second')
// }
//  =>
// let item 
// let item2
// let result1 = item>item2 ? 'first' : 'second'

// let result;
// if (item > item2) {
//   result = 0
// } else {
//   result = 1
// }
// console.log(result)
//  =>
// let item 
// let item2
// let result1 = item>item2 ? 0 : 1

//  № 15 
// 15. переписать в синтаксис switch case
const item =5
const item2 =2
switch (item,item2) {
case item > item2 :
    console.log('first')
    break;
case item> 1 && item2 > 3 :
    console.log('second')
    break;
case item < 1 || item2 > 3 :
    console.log('third')
    break;
case item2 > 3 : 
    console.log('forth')
    break;
default:
    console.log('fifth')  
    break
}

// if (item > item2) {
//   console.log('first')
// } else if (item > 1 && item2 > 3) {
//   console.log('second')
// } else if (item < 1 || item2 > 3) {
//   console.log('third')
// } else if (item2 > 3) {
//   console.log('forth')
// } else {
//   console.log('fifth')
// }

