import express from 'express';
import { getConnectionStatus } from './db';
import { addPokemon, getPokemons } from './pokemons';

const router = express.Router();

router.get('/', (req, res) => {
	return res.send('Welcome to the API.');
});

router.get('/pokemons', (req, res) => {
	res.send(getPokemons());
});

router.post('/pokemons', (req, res) => {
	console.log(req.body);
	const result = addPokemon(req.body.pokemon?.toString());
	if(result === 0)
		res.send('Pokemón adicionado com sucesso');
	else
		res.send('Houve um problema. Por favor verifique o log da aplicação.');
});

router.get('/dbdebug', (req, res) => {
	res.send({ status: getConnectionStatus() });
});

export default router
