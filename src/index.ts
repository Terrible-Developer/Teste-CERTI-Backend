import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	return res.send('Welcome to the API.');
});

app.get('/pokemons', (req, res) => {
	res.send({
		"names": [
			'Pokemon 2',
			'Pokemon 28',
			'Pokemon 69'
	]});
})


app.listen(port, () => {
	console.log(`App now running on port ${port}`);
});
