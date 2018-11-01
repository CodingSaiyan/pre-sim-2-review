import React, {Component} from 'react'
import axios from 'axios'
import Header from './Header'

//components 
import Movie from './Movie'

export default class Movies extends Component {
    constructor() {
        super()
        this.state = {
            movies: []
        }
    }
    componentDidMount() {
        axios.get('/api/movies').then( response => {
            this.setState({
                movies: response.data
            })
        })
    }
    render() {
        let { movies } = this.state
        return (
            <div>
                <div className="movies-main-container">
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