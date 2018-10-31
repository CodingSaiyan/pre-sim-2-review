module.exports = {
    getMovies(req, res) {
        let db = req.app.get('db')
        db.get_movies().then( dbRes => {
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
        db.get_movie_by_id({id}).then( dbRes => {
            let movieToEdit = dbRes[0]
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