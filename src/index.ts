import express from 'express';
import cors from 'cors';
import { addPokemon, getPokemons } from './pokemons';
import { initConnection, getConnectionStatus } from './db';
import routes from './routes';

const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.use('/api', routes);

initConnection(process.env.MONGODB_URL!);


app.listen(port, () => {
	console.log(`App now running on port ${port}`);
});
