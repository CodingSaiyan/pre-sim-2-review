import React, {Component} from 'react'

export default class AddMovie extends Component {
    constructor() {
        super()
        this.state = {
            movies: []
        }
    }
    render() {
        return (
            <div>
                Add Movie!
            </div>
        )
    }
}