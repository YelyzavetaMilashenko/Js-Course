// № 1
const userBob = {
    name: 'Bob',
    age: 21,
    gender: 'male',
    married: false,
}
delete userBob.age
userBob.gender = 'female'
userBob.pets = [{name: '',age: 0, classOfAnimal: 'dog'}]
console.log(userBob)
