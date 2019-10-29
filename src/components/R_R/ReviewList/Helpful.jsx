import React from 'react'
import axios from 'axios'
import constants from '../../../constants.js'

class Helpful extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            helpful: this.props.review.helpfulness,
            clicked: false
        }

        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
        if(!this.state.clicked){
            axios.put(`${constants.API_URL}/reviews/helpful/${this.props.review.review_id}`)
            const obj = {
                helpful: this.state.helpful + 1,
                clicked: true
            }
            this.setState(obj)
        } 
    }

    render() {
        return (
            <div onClick={this.handleClick} cursor="pointer" style={(this.state.clicked) ? {color: 'purple'} : {color: "blue"}}>helpful? ({this.state.helpful})</div>
        )
    }
}

export default Helpful