import React, {Component} from 'react'
import axios from 'axios'

export default class Movies extends Component {
    constructor(props) {
        super()
        this.state = {
            movie: {},
            edit: false,
            titleInput: '',
            descriptionInput: '',
            ratingInput: ''
        }
    }
    componentDidMount() {
        let {id} = this.props.match.params
        axios.get(`/api/movies/${id}`).then( response => {
            let movie = response.data[0]
            this.setState({
                movie,
                titleInput: movie.title,
                descriptionInput: movie.description,
                ratingInput: movie.rating
            })
        })
    }

    changeEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    handleTitleChange = (e) => {
        this.setState({
            titleInput: e.target.value
        })
    }

    handleDescriptionChange = (e) => {
        this.setState({
            descriptionInput: e.target.value
        })
    }

    handleRatingChange = (e) => {
        this.setState({
            ratingInput: e.target.value
        })
    }

    saveChanges = () => {
        let {titleInput, descriptionInput, ratingInput} = this.state
        let {id} = this.state.movie
        let newMovieValues = {
            title: titleInput,
            description: descriptionInput,
            rating: ratingInput
        }
        axios.put(`/api/movies/${id}`, newMovieValues).then( response => {
            let movie = response.data[0]
            this.setState({
                edit: false,
                movie
            })
        })
    }

    delete = () => {
        let {id} = this.state.movie 
        axios.delete(`/api/movies/${id}`).then( response => {
            this.props.history.push('/')
        })
    }

    render() {
        let {edit, titleInput, descriptionInput, ratingInput} = this.state
        let {title, description, rating} = this.state.movie
        return (
            <div className="movie-detail-main-container">
            {
                edit 
                ?
                <div className="movie-detail-container">
                    <span>Title:</span> <input value={titleInput} onChange={this.handleTitleChange}/>
                    <span>Description:</span> <input value={descriptionInput} onChange={this.handleDescriptionChange}/>
                    <span>Rating:</span> <input value={ratingInput} onChange={this.handleRatingChange}/>
                    <button onClick={this.saveChanges}>Save</button>
                </div>
                :
                <div className="movie-detail-container">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <p>{rating}</p>
                    <div>
                        <button onClick={this.changeEdit}>Edit</button>
                        <button onClick={this.delete}>Delete</button>
                    </div>
                </div>
            }
            </div>
        )
    }
}