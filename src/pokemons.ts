import { getAllPokemons, savePokemon } from './db';

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

export {
	getPokemons,
	addPokemon
}
