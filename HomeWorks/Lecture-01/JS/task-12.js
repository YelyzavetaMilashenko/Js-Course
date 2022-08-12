const userResult = prompt ('Выберите одно из трёх значений : камень, ножницы, бумага')
let userRes;
if (userResult == 'камень') {alert (userRes = 1 )}
else if (userResult === 'ножницы') { alert(userRes = 2)}
else if (userResult === 'бумага') {alert (userRes = 3) }
else {alert('Играй честно !')}

const randNum = [1, 2, 3] 
const randomResult=(Math.ceil(Math.random()*randNum.length))
alert(randomResult)

   if (userRes>randomResult ) {
       alert('Твоё значение больше!')  
   } 
   else if (userRes<randomResult){
       alert('Твоё значение меньше!')
   } 
   else  {
       alert('Значения равны!')}
