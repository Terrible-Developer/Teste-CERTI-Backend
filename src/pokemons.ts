
let pokemons: string[] = ['Pokemon 2', 'Pokemon 28', 'Pokemon 69'];

const getPokemons = (): string[] => {
	return pokemons;
}

const addPokemon = (pokemon: string | undefined): number => {
	if(pokemon === undefined) {
		console.log('Erro, pokemon não-definido');
		return 1;
	}
	else {
		pokemons.push(pokemon);
		return 0;
	}
}

export {
	getPokemons,
	addPokemon
}
