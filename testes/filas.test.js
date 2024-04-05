const Fila = require('../fila');

test('Adiciona uma tarefa à fila', () => {
    const fila = new Fila();
    fila.enfileirar('Limpar quarto');
    expect(fila.tarefas).toEqual(['Limpar quarto']);
});

test('Remove a primeira tarefa da fila', () => {
    const fila = new Fila();
    fila.enfileirar('Limpar quarto');
    fila.enfileirar('Limpar sala');
    fila.enfileirar('Limpar banheiro');
    fila.desenfileirar();
    expect(fila.tarefas).toEqual(['Limpar sala', 'Limpar banheiro']);
});

test('Verifica se a lista de tarefas está vazia ou não (Neste caso estará) ', () => {
    const fila = new Fila();
    expect(fila.vazia()).toEqual(true);
});

test('Verifica se a lista de tarefas está vazia ou não (Neste caso não estará) ', () => {
    const fila = new Fila();
    fila.enfileirar('Limpar quarto');
    expect(fila.vazia()).toEqual(false);
});