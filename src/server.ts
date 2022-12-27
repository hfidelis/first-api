import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

const app = express(); // Instanciando uma variável de start do express

mongoose.connect('mongodb://localhost/firstapi')

app.use(express.json()); // parser de JSON

app.use(routes);

app.listen(3000, () => {
    console.log('Server is listening');
});