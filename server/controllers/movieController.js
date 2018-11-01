module.exports = {
    getMovies(req, res) {
        //in order to have access to the db object given to us by massive, we have to use let db = req.app.get('db') at the top of every function
        let db = req.app.get('db')
        //we can call any of our sql files in our db folder by using db.name_of_file. This returns a promise and then we can use the database response as we want
        db.get_movies().then( dbRes => {
            res.status(200).send(dbRes)
        })
    },
    getMovieById(req, res) {
        let db = req.app.get('db')
        //We have three different places to access information on a request. req.params, req.body and req.query
        let {id} = req.params
        db.get_movie_by_id({id}).then( dbRes => {
            res.status(200).send(dbRes)
        })
    },
    addMovie(req, res) {
        let db = req.app.get('db')
        let {title, description, rating} = req.body
        db.add_movie({title, description, rating}).then( dbRes => {
            res.status(200).send(dbRes)
        })
    },
    editMovie(req, res) {
        let db = req.app.get('db')
        let {id} = req.params 
        let {title, description, rating} = req.body
        //Here I'm doing two db calls. One to get the movie with an id and the second one is in the .then of the first db call to make sure we have access to the returned movie
        db.get_movie_by_id({id}).then( dbRes => {
            //Make sure to console log what dbRes is to make sure you know where the object lives
            let movieToEdit = dbRes[0]
            //Its possible that title, description or rating were not passed from the frontend so this makes sure that if they were they will be used to update but if they weren't then the existing movies values are used
            title = title || movieToEdit.title
            description = description || movieToEdit.description
            rating = rating || rating.title
            db.update_movie_by_id({id, title, description, rating}).then( dbRes2 => {
                res.status(200).send(dbRes2)
            })
        })
    },
    deleteMovie(req, res) {
        let db = req.app.get('db')
        let {id} = req.params 
        db.delete_movie_by_id({id}).then(dbRes => {
            res.status(200).send(dbRes)
        })
    }
}