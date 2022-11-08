import express from 'express';
import cors from 'cors';
import { addPokemon, getPokemons } from './pokemons';

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	return res.send('Welcome to the API.');
});

app.get('/pokemons', (req, res) => {
	res.send(getPokemons());
});

app.post('/pokemons', (req, res) => {
	console.log(req.body);
	const result = addPokemon(req.body.pokemon?.toString());
	if(result === 0)
		res.send('Pokemón adicionado com sucesso');
	else
		res.send('Houve um problema. Por favor verifique o log da aplicação.');
});


app.listen(port, () => {
	console.log(`App now running on port ${port}`);
});
