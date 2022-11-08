
let pokemons: string[] = ['Pokemon 2', 'Pokemon 28', 'Pokemon 69'];

const getPokemons = (): string[] => {
	return pokemons;
}

const addPokemon = (pokemon: string | undefined): number => {
	if(pokemon === undefined || pokemon === null) {
		console.log('Erro, pokemon não-definido');
		return 1;
	}
	else {
		try {
			pokemons.push(pokemon);
			return 0;
		}
		catch(e) {
			console.log('Erro: ', e);
			return 2;
		}
	}
}

export {
	getPokemons,
	addPokemon
}
