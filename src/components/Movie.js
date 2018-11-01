import React from 'react'
import {Link} from 'react-router-dom'

export default function Movie(props) {
    let {title, description, rating, id} = props
    return (
        <div className="movie-main-container">
            <h4>{title}</h4>
            <p>{description}</p>
            <p>{rating}</p>
            <Link to={`/details/${id}`}><button>Details</button></Link>
        </div>
    )
}