// № 2
const arr = [0, 1, false, 2, undefined, '', 3, null];
const callback = (item ) => {
    if (item === 0){
        return true 
    }
    return Boolean(item)
} 
const compact = (array) => array.filter(callback)  ;
console.log(compact(arr)) 
