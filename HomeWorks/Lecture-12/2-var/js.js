
const mainBlock = document.querySelector('.mainBlock');

function createChessBoard() {
	let num = 1;
	let isBlack = true;

	for (let i = 0; i < 6; i++) {
		for (let j = 0; j < 6; j++) {
			const block = document.createElement('div');
			mainBlock.appendChild(block);
			block.className = 'block';
			block.classList.add(isBlack ? 'black' : 'white');
			block.id = `${isBlack ? 'b' : 'w'}-${Math.ceil(num / 2)}`;

			isBlack = !isBlack;
			num++;
		}
		isBlack = !isBlack;
	}
}
createChessBoard();

const initialChipsPositions = {
	red1: 'b-1',
	red2: 'b-2',
	red3: 'b-3',
	blue1: 'w-18',
	blue2: 'w-17',
	blue3: 'w-16',
};

let currentChipsPositions = null

function createChessFigure(initChipPos) {
	let num = 1;
	let isRed = true;
	for (let i = 0; i < 6; i++) {
        const color = isRed ? 'red' : 'blue';
        const chipName = color + (Math.ceil(num / 2));
		const figure = document.createElement('div');

		figure.id = `${chipName}`;

		figure.className = `fig ${color} ${chipName}`;
		figure.draggable = true;
        figure.innerHTML = `<span>${Math.ceil(num / 2)}</span>`
		document.getElementById(initChipPos[chipName]).appendChild(figure);

		isRed = !isRed;
		num++;

	}

    currentChipsPositions = {...initChipPos};
}

createChessFigure(initialChipsPositions);

mainBlock.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('id', e.target.id)

    const el = e.target.closest('div');
    console.log('start')
    if (el.classList.contains('fig')) {
       setTimeout(() => {
        el.classList.add('hide')
       }, 0)
    }
})

mainBlock.addEventListener('dragenter', (e) =>{
    console.log('enter')
    e.preventDefault()
    const el = e.target.closest('div');
    if (el.classList.contains('block')) {

    el.classList.add('hovered')}

})

mainBlock.addEventListener('dragend', (e) => {
    const el = e.target.closest('div');
    console.log('end')

    el.classList.remove('hide')
})

mainBlock.addEventListener('dragleave', (e) => {
    const el = e.target.closest('div');
    el.classList.contains('block')
    el.classList.remove('hovered')

})
mainBlock.addEventListener('dragover', (e) => {   
    e.preventDefault()
})

mainBlock.addEventListener('drop', (event) => {
    const itemId = event.dataTransfer.getData('id')
    const fishka = document.getElementById(itemId)
    let isRed = fishka.classList.contains('red')
    const target = event.target.closest('.block')
    target.classList.remove('hovered')

    if (isRed && target.classList.contains('black')&&target.childNodes.length===0) {
        target.append(fishka)
    }
 
    if (!isRed && target.classList.contains('white')&&target.childNodes.length===0) {
        target.append(fishka)   
    } 
})

const button = document.createElement("button")
mainBlock.appendChild(button);
button.innerHTML = "<button class='Click'>Reset</button>";

const buttonRandom = document.createElement("button")
mainBlock.appendChild(buttonRandom)
buttonRandom.innerHTML = "<button class='ClickRandom'>Random</button>"

const arr1 = Object.values(currentChipsPositions)
console.log(arr1)

const arr2 = Object.keys(currentChipsPositions)
console.log(arr2)

button.addEventListener('click', setDefault)

function setDefault () {
    for (let index = 0; index < arr2.length; index++) {
        let fig = document.getElementById(`${arr2[index]}`)
        console.log(fig)
        let cells = document.getElementById(`${arr1[index]}`)
        console.log(cells)
        cells.append(fig)
    }
}

buttonRandom.addEventListener('click', setRandom)
function setRandom () {
const idBlack = Array.from(document.querySelectorAll('.black')).map(el => el.id)
const idWhite = Array.from(document.querySelectorAll('.white')).map(el => el.id)
const array = []
for (let i = 0; i < 3; i++) {
    const randomIndex = getRandomIntInclusive(0, idBlack.length-1)
    array.push(idBlack[randomIndex])
    idBlack.splice(randomIndex, 1)
}
for (let i = 0; i < 3; i++) {
    const randomIndex = getRandomIntInclusive(0, idWhite.length-1)
    array.push(idWhite[randomIndex])
    idWhite.splice(randomIndex, 1)
}
for (let index = 0; index < arr2.length; index++) {

    let fig = document.getElementById(`${arr2[index]}`)
    let cells = document.getElementById(`${array[index]}`)

    cells.append(fig)
}
console.log(idBlack)
console.log(idWhite)

}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}