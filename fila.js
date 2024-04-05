class Fila {
    constructor() {
        this.tarefas = [];
    }

    enfileirar(item) {
        this.tarefas.push(item);
    }

    desenfileirar() {
        this.tarefas.shift();
    }

    vazia() {
        if (this.tarefas.length) {
            return false;
        } else {
            return true;
        }
    }
}

module.exports = Fila;
