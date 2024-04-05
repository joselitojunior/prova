const RoboDeLimpeza = require('../roboDeLimpeza');

test('Adiciona uma tarefa', () => {
    const robo = new RoboDeLimpeza();
    robo.adicionarTarefa('Limpar quarto');
    expect(robo.tarefas).toEqual(['Limpar quarto']);
});

test('Executa a próxima tarefa', () => {
    const robo = new RoboDeLimpeza();
    robo.adicionarTarefa('Limpar sala');
    robo.adicionarTarefa('Limpar quarto');
    robo.adicionarTarefa('Limpar cozinha');
    expect(robo.executarProximaTarefa()).toEqual('Limpar sala');
});

test('Executa todas as tarefas', () => {
    const robo2 = new RoboDeLimpeza();
    robo2.adicionarTarefa('Limpar sala');
    robo2.adicionarTarefa('Limpar quarto');
    robo2.adicionarTarefa('Limpar cozinha');
    robo2.adicionarTarefa('Limpar banheiro');
    robo2.adicionarTarefa('Desligar');
    const result = robo2.executarTodasTarefas();
    expect(result).toEqual(['Limpar sala', 'Limpar quarto', 'Limpar cozinha', 'Limpar banheiro', 'Desligar']);
});

test('Executa todas as tarefas (mas sem tarefas pendentes)', () => {
    const robo1 = new RoboDeLimpeza();
    const result = robo1.executarTodasTarefas();
    console.log(result)
    expect(result).toEqual([]);
});
