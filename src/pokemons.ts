import { getAllPokemons, savePokemon, deletePokemon } from './db';

const getPokemons = async () => {
	try {
	  const list = await getAllPokemons();
	  return list;
	}catch(e: any) {
	  return e.message;
	}
}

const addPokemon = async (pokemon: string | undefined) => {
	if(pokemon === undefined || pokemon === null) {
		console.log('Erro, pokemon não-definido');
	}
	else {
		try {
			const data = savePokemon(pokemon);
			return data;
		}
		catch(e) {
			console.log('Erro: ', e);
		}
	}
}

const removePokemon = async (pokemonId: string) => {
	const result = await deletePokemon(pokemonId);	
	return result;
}

export {
	getPokemons,
	addPokemon,
	removePokemon
}
