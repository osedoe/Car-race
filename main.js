// ================== //
// ====== Main ====== //
class Coche {
	constructor(
		model,
		position = 0,
		advantage,
		handicap,
		advantageRate,
		handicapRate
	) {
		this._model = model;
		this._position = position;
		this._advantage = advantage;
		this._handicap = handicap;
		this._advantageRate = advantageRate;
		this._handicapRate = handicapRate;
	}

	// Getters
	get model() {
		return this._model;
	}

	get position() {
		return this._position;
	}

	get advantage() {
		return this._advantage;
	}

	get handicap() {
		return this._handicap;
	}

	get advantageRate() {
		return this._advantageRate;
	}

	get handicapRate() {
		return this._handicapRate;
	}

	// Setters
	set model(model) {
		this._model = model;
	}

	set position(position) {
		this._position = position;
	}

	set advantage(advantage) {
		this._advantage = advantage;
	}

	set handicap(handicap) {
		this._handicap = handicap;
	}

	set advantageRate(advantageRate) {
		this._advantageRate = advantageRate;
	}

	set handicapRate(handicapRate) {
		this._handicapRate = handicapRate;
	}

	/**
	 * Function that moves the instance of the car
	 * @param {number} value - It will be the random number generated
	 */
	moveCar(value) {
		let steps = 0;
		/* Since each car has its own advantage/handicap condition, we can move the car depending only on one of these attributes and the remaining percentage */
		if (value <= this._advantageRate && value >= 0) {
			steps += this._advantage;
		} else if (value > this._advantageRate && value <= 100) {
			steps -= this._handicap;
		}
		return steps;
	}
}

// ==================================== //
// ====== Variables declaration ======= //
const END = 800;

const redlight = document.querySelectorAll(".redlight-item");
const start = document.getElementById("start");
const reset = document.querySelector("#reset");
const cars = document.querySelectorAll("img");

let turnSpan = document.querySelector("#turn");
let turnNumber = 0;

// Create instances of car
const batm = new Coche("batmovil", 0, 2, 0, 75, 25);
const miura = new Coche("miura", 0, 4, 1, 50, 50);
const six = new Coche("600", 0, 6, 0, 25, 75);

// ====================================== //
// ======= Functions declarations ======= //
/**
 * Generates a random number between the two specified parameters
 * @param {number} min - minimum
 * @param {number} max - maximum
 */
const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min;

// Sort the array of cars based on who arrived first
const whoWins = () =>
	[batm, miura, six]
		.sort((a, b) => b._position - a._position) // sort based on position
		.map(car => car._model); // crate a new array with the models based on the position

/* Count the amount of turns, since the wait() function didn't work,
it will display the amount of turns it took till one car wins */
const countTurn = () => {
	turnNumber += 1;
	turnSpan.textContent = turnNumber;
};

// Check the position of the car, if it's negative set it to zero
const setPositionInTrack = pos => {
	if (pos < 0) pos = 0;
};

// Move all the cars in each turn
const turnRoll = () => {
	let podiumPosition = [];
	let value = getRandomNumber(1, 100);

	batm.position += batm.moveCar(value);
	setPositionInTrack(batm.position);
	cars[0].style.transform = "translateX(" + batm._position + "px)";

	miura.position += miura.moveCar(value);
	setPositionInTrack(miura.position);
	cars[1].style.transform = "translateX(" + miura._position + "px)";

	six.position += six.moveCar(value);
	setPositionInTrack(six.position);
	cars[2].style.transform = "translateX(" + six._position + "px)";
};

// ========================= //
// ========== Main ========= //
const startGame = () => {
	// Animate redlight
	redlight[0].style.background = "darkred";
	redlight[1].style.background = "orange";
	setTimeout(() => {
		redlight[0].style.background = "grey";
	}, 600);
	setTimeout(() => {
		redlight[1].style.background = "gray";
		redlight[2].style.background = "green";
	}, 600);

	/* First we are going to write down the turn we are in the page. And roll the dice so we know how far is going each car */
	do {
		countTurn();
		turnRoll();
	} while (
		batm._position < END ||
		miura._position < END ||
		six._position < END
	);

	// Find out who wins the race
	setTimeout(() => {
		let resultArr = whoWins();
		let resultStr = `== Resultado ==

    1. ${resultArr[0]} \n
    2. ${resultArr[1]} \n
    3. ${resultArr[2]}`;
		alert(resultStr);
	}, 6500);
};

// ======================================== //
// ============ Event Listeners =========== //
start.addEventListener("click", () => startGame());
