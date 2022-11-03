import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	return res.send('Welcome to the API.');
});


app.listen(port, () => {
	console.log(`App now running on port ${port}`);
});
