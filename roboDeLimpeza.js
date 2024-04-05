const Fila = require("./fila");
const fila = new Fila;

class RoboDeLimpeza {
    constructor() {
        this.fila = fila;
        this.tarefas = fila.tarefas;
    }
    
    adicionarTarefa(tarefa) {
        fila.enfileirar(tarefa);
    }

    executarProximaTarefa() {
        if (!fila.vazia()) {
            fila.desenfileirar();
            return fila.tarefas[0];
        } else {
            throw "Lista vazia";
        }
    }

    executarTodasTarefas() {
        var tarefasExecutadas = [];
        if (!fila.vazia()) {
            for (let i = 0; i < fila.tarefas.length; i++) {
                tarefasExecutadas.push(fila.tarefas[i]);
                fila.desenfileirar();
            }
        }
        return tarefasExecutadas;
    }
}

module.exports = RoboDeLimpeza;
