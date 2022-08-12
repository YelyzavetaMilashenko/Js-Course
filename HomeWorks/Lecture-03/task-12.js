// № 12
const user = {
  name : 'Nik' ,
  age : 32,
  work : 'logist' ,
  phone : +11111111111,
  sister : 'Olena' ,
  education : 'yes' , 
  car : 'Ford',
  modelCar : 'Mustang',
  colorCar : 'Black',
  yearCar : 1987
}
for (const key in user) {
console.log(user[key])
}
