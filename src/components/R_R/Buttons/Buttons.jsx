import React from 'react'
import './Buttons.css'
import {Modal, Form} from 'react-bootstrap'
import Stars from '../Stars.jsx'

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
        console.log("buttons props:", this.props.reviews)
        const characteristics = ["Size", "Width", "Comfort", "Quality", "Length", "Fit"]
        return (
        <div className="review-buttons">

            <Modal show={this.state.show} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        New Review
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Review Title"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" placeholder="Enter Review Description"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Category Ratings</Form.Label>
                            {characteristics.map((char) =>{
                                return (
                                    <Form.Group>
                                        <Form.Label style={{marginRight: "5%", marginLeft: "5%"}}>{char}:</Form.Label>
                                        <Form.Check type="radio" inline label="1"/>
                                        <Form.Check type="radio" inline label="2"/>
                                        <Form.Check type="radio" inline label="3"/>
                                        <Form.Check type="radio" inline label="4"/>
                                        <Form.Check type="radio" inline label="5"/>
                                    </Form.Group>
                                )
                            })}
                        </Form.Group>
                        <Form.Group style={{justifyContent: 'center', display: "flex"}}>
                            <div style={{display: 'flex', justifyContent: "stretch"}}>Rating</div>
                            <Stars />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={this.close}>Close</button>
                    <button>Submit</button>
                </Modal.Footer>
            </Modal>

            <button className="review-button" onClick={this.getReviews}>More Reviews</button>
            <button className="review-button" onClick={this.addReview}>Add Review</button>
        </div>
        )
    }
}


export default Buttons