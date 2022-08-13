// № 7 
const myCar = {
    brand: 'Toyota' ,
    model: 'C-HR' ,
    mileage: 17773,
    maxSpead: 185,
    midlleSpead: 95,
    acceleration: 11.1,
    fuelConsuming: 6.6,
    drive() {let result = this.mileage + 150 
               return result },
    time() {let result = 300 / this.maxSpead
               return result},
    consuming() { let result = (300 / 100) * this.fuelConsuming
               return result }
}
console.log(myCar.consuming())