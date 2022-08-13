// № 10
const arr = [{width: 10, height: 20},
             {width: 12, height: 26}, 
             {width: 14, height: 50}, 
             {width: 6, height: 11}]
const fulInfo = arr.reduce((prev, item, i, arr) => {
    return {
        widthTotal: prev.widthTotal + item.width,
        heightTotal: prev.heightTotal + item.height,
        space: (prev.widthTotal + item.width) * (prev.heightTotal + item.height),
        quantity: arr.length,
    }
} , {
    widthTotal : 0,
    heightTotal : 0,
    space : 0,
    quantity : 0,
})
console.log(fulInfo)


    
    