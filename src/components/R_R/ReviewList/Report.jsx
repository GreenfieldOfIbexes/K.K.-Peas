import React from 'react'
import axios from 'axios'
import constants from '../../../constants.js'

class Report extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        if(!this.state.clicked){
            axios.put(`${constants.API_URL}/reviews/report/${this.props.review.review_id}`)
            this.setState({
                clicked: true
            })
        }
    }


    render() {
        return (
            <>
            {(this.state.clicked) ? <div hide={!this.state.clicked}>reported</div> :  <div onClick={this.handleClick} hide={this.state.clicked} cursor="pointer">report</div>}
            </>
        )
    }
}

export default Report