// № 5 
function getMaxValue (a = 7, b = 9) {
    return Math.max(a,b)
}
function callBack (num1) {
    console.log(num1)
}  
callBack(getMaxValue())
