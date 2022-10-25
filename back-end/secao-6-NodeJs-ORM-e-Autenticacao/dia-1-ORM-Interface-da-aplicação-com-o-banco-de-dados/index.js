require('dotenv').config();

const express = require('express');

const BooksController = require('./src/controllers/BooksController');

const app = express();
const PORT = process.env.PORT || 3306;

app.use(express.json());

app.get('/books', BooksController.getAll);
app.get('/books/:id', BooksController.getById);
app.post('/books', BooksController.create);
app.put('/books/:id', BooksController.update);
app.delete('/books/:id', BooksController.remove);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
