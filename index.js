const RoboDeLimpeza = require('./roboDeLimpeza');
const robo = new RoboDeLimpeza;

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const PORT = process.env.PORT || 4000;

// Este endpoint é responsável por solicitar a execução de todas as tarefas de limpeza pendentes na fila do Robô de Limpeza.
app.get("/executar_todas_tarefas", (req, res) => {
	const tarefasExecutadas = robo.executarTodasTarefas();
	if (tarefasExecutadas.length) {
		res.status(200).json({mensagem: "Todas as tarefas foram executadas com sucesso.", tarefasExecutadas: tarefasExecutadas})
	} else {
		res.status(200).json({mensagem: "Não há tarefas pendentes a serem executadas", tarefasExecutadas: tarefasExecutadas})
	}
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});