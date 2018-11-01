//express is our server framework
const express = require('express');
//body parser is our package that allows us access to req.body on requests
const bodyParser = require('body-parser');
//massive is the package we use to interact with our database
const massive = require('massive');
//because our controllers are not packages, we need to use ./routeToOurFile
const mc = require('./controllers/movieController')
// Make sure to bring dotenv in before you access process.env
require('dotenv').config()

//We need to invoke app before any of our routes 
const app = express();

//if we don't use bodyParser.json we won't have req.body 
app.use( bodyParser.json() );
//This line is what sets up our connection to our database. the dbInstance is our db object. using app.set allows us to access this db object on any of our routes
massive( process.env.CONNECTION_STRING ).then( dbInstance => {
  app.set('db', dbInstance);
});

//All of our endpoint are defined with app.method('/endpoint', callbackFunction)
app.get('/api/movies', mc.getMovies)
//We don't need to define querys on our endpoints but we do need to define any params
app.get('/api/movies/:id', mc.getMovieById)
app.post('/api/movies', mc.addMovie)
app.put('/api/movies/:id', mc.editMovie)
app.delete('/api/movies/:id', mc.deleteMovie)


const port = process.env.PORT || 3000
app.listen(port, () => { console.log(`Server listening on port ${port}`) } );