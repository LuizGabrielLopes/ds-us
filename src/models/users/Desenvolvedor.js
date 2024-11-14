class Desenvolvedor {
    constructor(name, equipe) {
        this.id = this.generateId();
        this.name = name
        this.equipe = equipe
    }

    generateId() {
        return Math.floor(Math.random() * 999) + 1;
    }
}

