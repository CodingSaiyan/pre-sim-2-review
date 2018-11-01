import React, {Component} from 'react'
import axios from 'axios'

//components 
import Movie from './Movie'

export default class Movies extends Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            title: '',
            description: '',
            rating: ''
        }
    }
    componentDidMount() {
        axios.get('/api/movies').then( response => {
            this.setState({
                movies: response.data
            })
        })
    }

    handleChange = (val, key) => {
        let obj = {}
        obj[key] = val 
        this.setState(obj)
    }

    addMovie = () => {
        let {title, description, rating } = this.state
        axios.post('/api/movies', {title, description, rating}).then(response => {
            this.setState({
                movies: response.data,
                title: '',
                description: '',
                rating: ''
            })
        })
    }

    render() {
        let { movies, title, description, rating } = this.state
        return (
            <div>
                <div className="movies-main-container">
                    <div className="new-movie-container">
                        <div>Title: <input value={title} onChange={(e) => this.handleChange(e.target.value, 'title')}/></div>
                        <div>Description: <input value={description} onChange={(e) => this.handleChange(e.target.value, 'description')}/></div>
                        <div>Rating: <input value={rating} onChange={(e) => this.handleChange(e.target.value, 'rating')}/></div>
                        <div><button onClick={this.addMovie}>Add Movie</button></div>
                    </div>
                    {
                        movies.map( (movie, index) => {
                            return (
                                <Movie 
                                title={movie.title}
                                description={movie.description}
                                rating={movie.rating}
                                id={movie.id}
                                key={index}
                                ></Movie>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}