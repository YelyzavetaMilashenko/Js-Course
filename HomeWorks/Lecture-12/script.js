// function createChessBoard () {
// const mainBlock = document.querySelector('.mainBlock');
// let num = 1;
// let isBlack = true;

// for (let i = 0; i < 6; i++) {
//     for(let j = 0; j < 6; j++) {
//         const block = document.createElement("div")
//         block.className ="block"
//         block.classList.add(isBlack? "black" : "white")
//         block.id = `${isBlack ? "b" : "w"}-${Math.ceil(num/2)}`

//          mainBlock.appendChild(block)

//     isBlack = !isBlack
// num++
//     }
//     isBlack = !isBlack
// }
// }
// createChessBoard()

// function createChessFigure () {
//     let figure;
//     let isRed= true;
//     for (let i = 0; i < 6; i++) {
//         const figure = document.createElement("div")
// figure.draggable=true


//     }
// }

function createChessBoard () {
    const mainBlock = document.querySelector('.mainBlock');
    let num = 1;
    let isBlack = true;
    let figure;
    for (let i = 0; i < 6; i++) {
        for(let j = 0; j < 6; j++) {
            const block = document.createElement("div")
            block.className ="block"
            block.classList.add(isBlack? "black" : "white")

            figure = document.createElement("div")
            block.appendChild(figure)
            figure.id = `${isBlack ? "b" : "w"}-${Math.ceil(num/2)}`
            mainBlock.appendChild(block)
            figure.draggable = true

        isBlack = !isBlack
    num++
        }
        isBlack = !isBlack
    }
    document.getElementById("b-1").className="chessmanBlack"
    document.getElementById("b-2").className="chessmanBlack"
    document.getElementById("b-3").className="chessmanBlack"
    document.getElementById("w-18").className="chessmanWhite"
    document.getElementById("w-17").className="chessmanWhite"
    document.getElementById("w-16").className="chessmanWhite"


const dragAndDrop = () => {    
const cells = document.querySelectorAll('.black')
const fig1 = document.querySelector(".chessmanBlack")   
console.log(fig1)
function onDragStart() {
    setTimeout (() => {
        this.classList.add('hide')
},0)
}
function dragEnd () {
    this.classList.remove('hide')

}
  fig1.addEventListener('dragstart', onDragStart)
  fig1.addEventListener('dragend', dragEnd)

function dragOver (event) {
event.preventDefault()
};
function dragEnter(event) {
    event.preventDefault()
 this.classList.add('hovered')
};
function dragLeave () {
    this.classList.remove('hovered')
};
function dragDrop (event) {
    console.log(event.currentTarget)
 this.appendChild(fig1)
 this.classList.remove('hovered')

};
cells.forEach((cell) => {
cell.addEventListener('dragover', dragOver)
cell.addEventListener('dragenter', dragEnter)
cell.addEventListener('dragleave', dragLeave)
cell.addEventListener('drop', dragDrop)
})  
}

dragAndDrop()

const dragAndDrop1 = () => {    
    const cells = document.querySelectorAll('.white')
    const fig1 = document.querySelectorAll(".chessmanWhite")   
    console.log(fig1)
    
    function onDragStart(event) {
    event.dataTransfer.setData('id', event.target.id)
        setTimeout (() => {
        this.classList.add('hide')
    },0)
    };
    
    function dragEnd () {
    this.classList.remove('hide')
    };
    
    fig1.forEach((fig1) => {
        fig1.addEventListener('dragstart', onDragStart)
        fig1.addEventListener('dragend', dragEnd)
    });
    
    function dragOver (event) {
    event.preventDefault()
    };
    
    function dragEnter(event) {
    event.preventDefault()
    this.classList.add('hovered')
    };
    
    function dragLeave () {
    this.classList.remove('hovered')
    };
    
    function dragDrop (event) {
    console.log(event)
    this.appendChild(document.getElementById(event.dataTransfer.getData('id')))
    this.classList.remove('hovered')
    };
    cells.forEach((cell) => {
    cell.addEventListener('dragover', dragOver)
    cell.addEventListener('dragenter', dragEnter)
    cell.addEventListener('dragleave', dragLeave)
    cell.addEventListener('drop', dragDrop)
    })  
}

dragAndDrop1()


const button = document.createElement("button")
mainBlock.appendChild(button);
button.innerHTML = "<button class='Click' onclick = 'window.location.reload()'>Reset</button>";

const buttonRandom = document.createElement("button")
mainBlock.appendChild(buttonRandom)
buttonRandom.innerHTML = "<button class='ClickRandom' onclick = 'random'>Random</button>"

function random() {

}
}
createChessBoard()
    


// const dragAndDrop = () => {    
//     const cells = document.querySelectorAll('.black')
//     const fig2 = document.querySelectorAll(".chessmanBlack")   
//     console.log(fig2)

//     function onDragStart(event) {
//     event.dataTransfer.setData('id', event.target.id)
//         setTimeout (() => {
//             this.classList.add('hide')
//     },0)
//     };

//     function dragEnd () {
//         this.classList.remove('hide')
    
//     };
//     fig2.forEach((fig2) => {
//         fig2.addEventListener('dragstart', onDragStart)
//         fig2.addEventListener('dragend', dragEnd)
//     });

//     function dragOver (event) {
//     event.preventDefault()
//     };

//     function dragEnter(event) {
//         event.preventDefault()
//      this.classList.add('hovered')
//     };

//     function dragLeave () {
//         this.classList.remove('hovered')
//     };

//     function dragDrop (event) {
//     console.log(event)
//      this.appendChild(document.getElementById(event.dataTransfer.getData('id')))
//      this.classList.remove('hovered')
    
//     };
//     cells.forEach((cell) => {
//     cell.addEventListener('dragover', dragOver)
//     cell.addEventListener('dragenter', dragEnter)
//     cell.addEventListener('dragleave', dragLeave)
//     cell.addEventListener('drop', dragDrop)
//     })  
//     }
//     dragAndDrop()



//     const dragAndDrop1 = () => {    
//         const cells = document.querySelectorAll('.white')
//         const fig1 = document.querySelectorAll(".chessmanWhite")   
//         console.log(fig1)
    
//         function onDragStart(event) {
//         event.dataTransfer.setData('id', event.target.id)
//             setTimeout (() => {
//                 this.classList.add('hide')
//         },0)
//         };
    
//         function dragEnd () {
//             this.classList.remove('hide')
        
//         };
//         fig1.forEach((fig1) => {
//             fig1.addEventListener('dragstart', onDragStart)
//             fig1.addEventListener('dragend', dragEnd)
//         });
    
//         function dragOver (event) {
//         event.preventDefault()
//         };
    
//         function dragEnter(event) {
//             event.preventDefault()
//          this.classList.add('hovered')
//         };
    
//         function dragLeave () {
//             this.classList.remove('hovered')
//         };
    
//         function dragDrop (event) {
//         console.log(event)
//          this.appendChild(document.getElementById(event.dataTransfer.getData('id')))
//          this.classList.remove('hovered')
        
//         };
//         cells.forEach((cell) => {
//         cell.addEventListener('dragover', dragOver)
//         cell.addEventListener('dragenter', dragEnter)
//         cell.addEventListener('dragleave', dragLeave)
//         cell.addEventListener('drop', dragDrop)
//         })  
//         }
//         dragAndDrop1()
    