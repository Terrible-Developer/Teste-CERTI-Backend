import mongoose from 'mongoose';
import Model from './model/dbSchema'

let db: mongoose.Connection; 

//Inicializa a conexão
const initConnection = (connectionString: string): void => {
	mongoose.connect(connectionString);
	db = mongoose.connection;

	db.on('error', (error) => {
		console.log('Houve um erro: ', error);
	});

	db.once('connected', () => {
		console.log('Banco conectado');
	});
}

//Retorna todos os itens da coleção de pokemons
const getAllPokemons = async () => {
	try {
		const pokemonList = await Model.find();
		return pokemonList;
	}catch(e: any) {
		return e.message;
	}
}

//Adiciona um novo pokemon à coleção e retorna ele em seguida
const savePokemon = async (pokemon: string) => {
	const data = new Model({
		name: pokemon
	});

	try {
	  const outgoingData = await data.save();
	  return outgoingData.toObject();
		
	}catch(e) {
	  return {error: e}	
	}
}

//Deleta um pokemon do banco
const deletePokemon = async (pokemonId: string) => {
	const result = await Model.deleteOne({ _id: pokemonId });
	return result;
}

//Retorna o status de conexão ao banco
const getConnectionStatus = (): mongoose.ConnectionStates => {
	return mongoose.connection.readyState;
}


export {
	initConnection,
	getConnectionStatus,
	savePokemon,
	getAllPokemons,
	deletePokemon
}
