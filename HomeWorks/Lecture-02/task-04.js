// № 4
let num1 = [7,7,5,]
let num2 = [2,9,6]
function numSum(array){ 
let sum = 0;
for(let i = 0; i < array.length; i++){
    sum += array[i];
    } 
console.log(sum);
return(sum)
}

if (numSum(num1)>numSum(num2)) {
    alert ('Num1 > Num2')
} else {
    alert ('Num1 < Num2') 
}
