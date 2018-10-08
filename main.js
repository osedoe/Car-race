/**
 * Main class
 */
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

    // Custom methods
    /**
     * Function that moves the instance of the car
     * @param {number} value - It will be the random number generated
     */
    moveCar(value) {
        let steps = 0;
        if (value <= this._advantageRate && value >= 0) {
            steps += this._advantage;
        } else if (value > this._advantageRate && value <= 100) {
            steps -= this._handicap;
        }
        return steps;
    }
}

// ======== UTILS ======== //

/**
 * Sets a timer to execute another function
 * @param {number} ms - milliseconds
 * @param {function} callback - function we want to execute
 */
// const sleep = (ms, callback) => setTimeout(() => callback, ms);

/**
 * Generates a random number between the two specified parameters
 * @param {number} min - minimum
 * @param {number} max - maximum
 */
const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min;

// ========================= //

// Save variables that we are going to use
const start = document.getElementById("start");
let turnSpan = document.getElementById("turn");

const car1 = document.getElementById("batmovil");
const car2 = document.getElementById("miura");
const car3 = document.getElementById("600");

const track1 = document.getElementById("track1");
const track2 = document.getElementById("track2");
const track3 = document.getElementById("track3");

const batm = new Coche("batmovil", 0, 2, 0, 75, 25);
const miura = new Coche("miura", 0, 4, 1, 50, 50);
const six = new Coche("600", 0, 6, 0, 25, 75);

let turnNumber = 0;


// Event listener to start the game triggered by the button
start.addEventListener("click", () => startGame());

//&nbsp


/**
 * Main
 */
function startGame() {

    // First we are going to write down the turn we are in the page

    /**  Call the function that generates a random number
     * so we can pass the value returned into the Class method that makes
     * the cars move 
     */
    // while (batm._position < 200 || miura._position < 200 || six._position < 200) {
    countTurn();
    turnRoll();
    // }


}

function countTurn() {
    turnNumber += 1;
    turnSpan.textContent = turnNumber;
}


function turnRoll() {
    let value = getRandomNumber(1, 100);
    console.log("====");
    batm.position += batm.moveCar(value);
    console.log(batm._position);
    miura.position += miura.moveCar(value);
    console.log(miura._position);
    six.position += six.moveCar(value);
    console.log(six._position);

}