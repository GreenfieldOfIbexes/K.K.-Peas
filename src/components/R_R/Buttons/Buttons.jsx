import React from 'react'
import './Buttons.css'
import {Modal, Form} from 'react-bootstrap'
import Stars from '../Stars.jsx'

class Buttons extends React.Component {
    constructor(props){
        super(props)

        this.state={
            show: false,
            starValue: 0,
            userName: '',
            Size: null,
            Width: null,
            Comfort: null,
            Quality: null,
            Length: null,
            Fit: null
        }
        this.addReview = this.addReview.bind(this)
        this.getReviews = this.getReviews.bind(this)
        this.close = this.close.bind(this)
        this.handleChar = this.handleChar.bind(this)
        this.handleDescription = this.handleDescription.bind(this)
        this.handleTitle = this.handleTitle.bind(this)
        this.handleUsername = this.handleUsername.bind(this)
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

    handleUsername(e){
        this.setState({
            userName: e.target.value
        })
        console.log('username: ', e.target.value)
    }

    handleTitle(e) {
        this.setState({
            title: e.target.value
        })
        console.log("title: ", e.target.value)
    }

    handleDescription(e) {
        this.setState({
            description: e.target.value
        })
        console.log('description: ', e.target.value)
    }

    handleChar(e, char){
        var obj = {};
        obj[e.target.name] = e.target.value;
        this.setState(obj)
        console.log("e and char: ", e.target.value, e.target.name)
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
                            <Form.Control type="text" placeholder="Enter Username" onChange={this.handleUsername}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Review Title" onChange={this.handleTitle}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" placeholder="Enter Review Description" onChange={this.handleDescription}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Category Ratings</Form.Label>
                            {characteristics.map((char) =>{
                                return (
                                    <Form.Group>
                                        <Form.Label style={{marginRight: "100%", marginLeft: "5%"}}>{char}:</Form.Label>
                                            <div style={{display: "flex", justifyContent: 'center'}}>
                                                <Form.Check
                                                type="radio"
                                                label="1"
                                                name={char}
                                                id="formHorizontalRadios1"
                                                value={1}
                                                onClick={this.handleChar}
                                                inline
                                                />
                                                <Form.Check
                                                type="radio"
                                                label="2"
                                                name={char}
                                                id="formHorizontalRadios1"
                                                value={2}
                                                onClick={this.handleChar}
                                                inline
                                                />
                                                <Form.Check
                                                type="radio"
                                                label="3"
                                                name={char}
                                                id="formHorizontalRadios1"
                                                value={3}
                                                onClick={this.handleChar}
                                                inline
                                                />
                                                <Form.Check
                                                type="radio"
                                                label="4"
                                                name={char}
                                                id="formHorizontalRadios1"
                                                value={4}
                                                onClick={this.handleChar}
                                                inline
                                                />
                                                <Form.Check
                                                type="radio"
                                                label="5"
                                                name={char}
                                                id="formHorizontalRadios1"
                                                value={5}
                                                onClick={this.handleChar}
                                                inline
                                                />
                                            </div>
                                    </Form.Group>
                                )
                            })}
                        </Form.Group>
                        <Form.Group style={{justifyContent: 'center', display: "flex"}}>
                            <div style={{width: '100%'}}>Rating</div>
                        </Form.Group>
                        <div style={{justifyContent: 'center', display: "flex"}}>
                            <Stars value={this.state.starValue}/>
                        </div>
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