class Impostor {
    constructor(name, equipe) {
        this.id = this.generateId();
        this.name = name
        this.equipe = equipe
    }
    
    generateId() {
        return Math.floor(Math.random() * 999) + 1;
    }
}

class Local {
    constructor(name, localizacao, aberto, tarefa) {
        this.id = this.generateId();
        this.name = name
        this.equipe = equipe
    }
    
    generateId() {
        return Math.floor(Math.random() * 999) + 1;
    }
}