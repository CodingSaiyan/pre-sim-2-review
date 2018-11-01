import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div className="header-main-container">
            <div className="header-title"><Link to="/">Movies</Link></div>
        </div>
    )
}