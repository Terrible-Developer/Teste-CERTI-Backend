import express from 'express';
import { getConnectionStatus } from './db';
import { addPokemon, getPokemons, removePokemon } from './pokemons';

//Roteador para passar as rotas ao app
const router = express.Router();

//Retorna todos os pokemons
router.get('/pokemons', async (req, res) => {
	res.send(await getPokemons());
});

//Adiciona um novo pokemon
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

//Deleta um pokemon pela id
router.delete('/pokemons/:id', async (req, res) => {
	const result = await removePokemon(req.params.id);
	res.send(result);
});

//Debug pra retornar o status de conexão do banco de dados
router.get('/dbdebug', (req, res) => {
	res.send({ status: getConnectionStatus() });
});


export default router
