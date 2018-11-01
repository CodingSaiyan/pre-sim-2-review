import React from 'react'
// Link is the other thing we bring in from React router. it lets us wrap elements so that when we click them it takes us to a new route. 
import {Link} from 'react-router-dom'

export default function Movie(props) {
    let {title, description, rating, id} = props
    return (
        <div className="movie-main-container">
            <h4>{title}</h4>
            <p>{description}</p>
            <p>{rating}</p>
            {/* Make sure to not forget the to prop otherwise link won't work */}
            <Link to={`/details/${id}`}><button>Details</button></Link>
        </div>
    )
}