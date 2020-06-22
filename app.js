document.addEventListener('DOMContentLoaded', () => {

//card options
const cardArray = [
{
	name: 'pinkarrow',
	img: 'images/pinkarrow.png'
},
{
	name: 'pinkarrow',
	img: 'images/pinkarrow.png'
},
{
	name: 'bluepolygon',
	img: 'images/blurpolygon.png'
},
{
	name: 'bluepolygon',
	img: 'images/bluepolygon.png'
},
{
	name: 'greenstar',
	img: 'images/greenstar.png'
},
{
	name: 'greenstar',
	img: 'images/greenstar.png'
},
{
	name: 'pinktrapazoid',
	img: 'images/pinktrapazoid'
},
{
	name: 'pinktrapazoid',
	img: 'images/pinktrapazoid'
},
{
	name: 'RedCircle',
	img: 'images/RedCircle.png'
},
{
	name: 'RedCircle',
	img: 'images/RedCircle.png'
},
{
	name: 'yellowdiamond',
	img: 'images/yellowdiamond.png'
},
{
	name: 'yellowdiamond',
	img: 'images/yellowdiamond.png'
}

]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
const cardsWon = []

//create your board
function createBoard() {
	for (let i = 0; i < cardArray.length; i++) {
		var card = document.createElement('img')
		card.setAttribute('src', 'images/backside.png')
		card.setAttribute('data-id', i)
		card.addEventListener('click', flipCard)
		grid.appendChild(card)
	}
}

//check for matches
function checkForMatch() {
	var cards = document.querySelectorAll('img')
	const optionOneId = cardsChosenId[0]
	const optionTwoId = cardsChosenId[1]

	if(optionOneId == optionTwoId) {
		cards[optionOneId].setAttribute('src', 'images/backside.png')
		cards[optionTwoId].setAttribute('src', 'images/backside.png')
		alert('You have clicked the same image!')
	}

	else if (cardsChosen[0] === cardsChosen[1]) {
		alert('You Found a Match')
		cards[optionOneId].setAttribute('src', 'images/whitespace.png')
		cards[optionTwoId].setAttribute('src', 'images/whitespace.png')
		cards[optionOneId].removeEventListener('click', flipCard)
		cards[optionTwoId].removeEventListener('click', flipCard)
		cardsWon.push(cardsChosen)
    } else {
    	cards[optionOneId].setAttribute('src', 'images/backside.png')
    	cards[optionTwoId].setAttribute('src', 'images/backside.png')
    	alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
    	resultDisplay.textContent = 'Congratualtions! You Found Them All!'
    }
}	



	//flip your card
function flipCard() {
	var cardId = this.getAttribute('data-id')
	cardsChosen.push(cardArray[cardId].name)
	cardsChosenId.push(cardId)
	this.setAttribute('src', cardArray[cardId].img)
	if (cardsChosen.length === 2) {
		setTimeout(checkForMatch, 500)
	}
	console.log(cardsChosen)
}


createBoard()



})