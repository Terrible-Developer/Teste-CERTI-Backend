import express from 'express';
import { getConnectionStatus } from './db';
import { addPokemon, getPokemons } from './pokemons';

const router = express.Router();

router.get('/', (req, res) => {
	return res.send('Welcome to the API.');
});

router.get('/pokemons', async (req, res) => {
	res.send(await getPokemons());
});

router.post('/pokemons', async (req, res) => {
	const data = await addPokemon(req.body.pokemon);
	if(data) {
	  res.send({
	  	message: 'Pokemón adicionado com sucesso',
	  	data: data
	  });
	}
	else
	  res.send({ message: 'Houve um problema. Por favor verifique o log da aplicação.' });
});

router.get('/dbdebug', (req, res) => {
	res.send({ status: getConnectionStatus() });
});

export default router
