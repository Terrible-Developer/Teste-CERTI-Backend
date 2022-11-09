import express from 'express';
import cors from 'cors';
import { addPokemon, getPokemons } from './pokemons';
import { initConnection, getConnectionStatus } from './db';
import routes from './routes';
import path from 'path';

//Configuração do express, incluindo dotenv para variáveis de ambiente e cors para aceitar requisições de mesma origem
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

//Página Inicial 
app.get('/', (req, res) => {
	//return res.send('Welcome to the API.');
	res.sendFile(path.join(__dirname, '/views/index.html'));
});

//Adiciona as rotas
app.use('/api', routes);

//Chama o método para inicializar a conexão com o banco
initConnection(process.env.MONGODB_URL!);


app.listen(port, () => {
	console.log(`App now running on port ${port}`);
});
