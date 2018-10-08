/**
 * Clase Corredor
 */
class Coche {
    constructor(model, advantage, disadvantage) {
        this.model = model;
        this.advantage = advantage;
        this.disadvantage = disadvantage;
    }

    // Getters y setters
    get model() {
        return this.model;
    }

    set model(model) {
        this.model = model;
    }

    get advantage() {
        return this.advantage;
    }

    set advantage(advantage) {
        this.advantage = advantage;
    }

    get disadvantage() {
        return this.disadvantage;
    }

    set disadvantage(disadvantage) {
        this.disadvantage = this.disadvantage;
    }

}

class Batmovil extends Coche {
    constructor(model, advantage, disadvantage) {
        super(model, advantage, disadvantage);
    }
}