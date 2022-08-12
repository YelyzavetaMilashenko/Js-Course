// № 6
function sum() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
    return result;
  }
  console.log( sum(0, 1, 5, 7) );

function sum1(...args) { 
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  console.log( sum1(1, 2, 3) );