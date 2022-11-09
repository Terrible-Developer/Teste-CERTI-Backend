import mongoose from 'mongoose';
import Model from './model/dbSchema'

let db: mongoose.Connection; 

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

const getAllPokemons = async () => {
	try {
		const pokemonList = await Model.find();
		return pokemonList;
	}catch(e: any) {
		return e.message;
	}
}

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

const getConnectionStatus = (): mongoose.ConnectionStates => {
	return mongoose.connection.readyState;
}


export {
	initConnection,
	getConnectionStatus,
	savePokemon,
	getAllPokemons
}
