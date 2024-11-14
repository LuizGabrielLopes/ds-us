class Jogador {
    constructor(impostor, name, equipe) {
        this.id = this.generateId();
        this.name = name;
        this.impostor = impostor;
        this.equipe = equipe;
    }

    generateId() {
        return Math.floor(Math.random() * 999) + 1;
    }
}

export default Jogador;