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
const END = 800;

const start = document.getElementById("start");
const reset = document.querySelector("#reset");
const cars = document.querySelectorAll("img");

let turnSpan = document.querySelector("#turn");
let turnNumber = 0;

// Create instances of car
const batm = new Coche("batmovil", 0, 2, 0, 75, 25);
const miura = new Coche("miura", 0, 4, 1, 50, 50);
const six = new Coche("600", 0, 6, 0, 25, 75);

// Function declarations
const whoWins = () => [batm, miura, six]
    .sort((a, b) => b._position - a._position)
    .map(car => car._model);

const podium = car => {
    if (car.position >= END) {
        return car;
    }
};

const countTurn = () => {
    turnNumber += 1;
    turnSpan.textContent = turnNumber;
};

const setPositionInTrack = pos => {
    if (pos < 0) pos = 0;
};

const turnRoll = () => {
    let podiumPosition = [];
    let value = getRandomNumber(1, 100);

    batm.position += batm.moveCar(value);
    cars[0].style.transform = "translateX(" + batm._position + "px)";
    podium(batm);

    miura.position += miura.moveCar(value);
    cars[1].style.transform = "translateX(" + miura._position + "px)";
    podium(miura);

    six.position += six.moveCar(value);
    cars[2].style.transform = "translateX(" + six._position + "px)";
    podium(six);
};

const resetTrigger = () => {
    cars.forEach((car) => {
        car._position = 0;
    });
}

// ========== Main ========= //

const startGame = () => {
    /**
     * First we are going to write down the turn we are in the page.  * * And roll the dice so we know how far is going each car
     */
    do {
        countTurn();
        turnRoll();
    } while (
        batm._position < END ||
        miura._position < END ||
        six._position < END
    );

    /**
     * Find out who wins the race
     */
    setTimeout(() => {
        let resultArr = whoWins();
        let resultStr =
            `== Resultado ==

    1. ${resultArr[0]} \n
    2. ${resultArr[1]} \n
    3. ${resultArr[2]}`
        alert(resultStr);
    }, 6500);

};

// Event listener to start the game triggered by the button
start.addEventListener("click", () => startGame());
reset.addEventListener("click", () => resetTrigger());