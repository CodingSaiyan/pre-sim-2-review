const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const mc = require('./controllers/movieController')
require('dotenv').config()

const app = express();

app.use( bodyParser.json() );
app.use( cors() );
massive( process.env.CONNECTION_STRING ).then( dbInstance => {
  app.set('db', dbInstance);
});

app.get('/api/movies', mc.getMovies)
app.post('/api/movies', mc.addMovie)
app.put('/api/movies/:id', mc.editMovie)
app.delete('/api/movies/:id', mc.deleteMovie)


const port = process.env.PORT || 3000
app.listen(port, () => { console.log(`Server listening on port ${port}`) } );