import React, {Component} from 'react'

export default class Movies extends Component {
    constructor() {
        super()
        this.state = {
            movies: []
        }
    }
    render() {
        return (
            <div>
                Movies!
            </div>
        )
    }
}