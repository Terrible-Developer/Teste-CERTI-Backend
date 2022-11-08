import mongoose from 'mongoose';

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

const getConnectionStatus = (): mongoose.ConnectionStates => {
	return mongoose.connection.readyState;
}


export {
	initConnection,
	getConnectionStatus
}
