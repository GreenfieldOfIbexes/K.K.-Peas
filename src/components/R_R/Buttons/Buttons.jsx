import React from 'react'
import './Buttons.css'
import {Modal} from 'react-bootstrap'

class Buttons extends React.Component {
    constructor(props){
        super(props)

        this.state={
            show: false
        }
        this.addReview = this.addReview.bind(this)
        this.getReviews = this.getReviews.bind(this)
        this.close = this.close.bind(this)
    }

    getReviews() {

    }

    addReview() {
        this.setState({
            show:  true
        })
    }

    close() {
        this.setState({
            show: false
        })
    }


    render() {
        return (
        <div className="review-buttons">

            <Modal show={this.state.show} onClose={this.close}>
                <Modal.header closeButton>
                    <Modal.Title>
                        New Review
                    </Modal.Title>
                </Modal.header>
                <Modal.Body>
                    stuff
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={this.close}>close</button>
                    <button>submit</button>
                </Modal.Footer>
            </Modal>

            <button className="review-button" onClick={this.getReviews}>More Reviews</button>
            <button className="review-button" onClick={this.addReview}>Add Review</button>
        </div>
        )
    }
}


export default Buttons