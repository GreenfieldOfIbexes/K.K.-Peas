import React from 'react'
import './Buttons.css'
import {Modal, Form} from 'react-bootstrap'
import {Rating} from '@material-ui/lab'
import axios from 'axios'
import constants from '../../../constants.js'
import Characteristics from './Characteristics.jsx'
import GetReviewsContainer from '../../../containers/R_R/GetReviews.js'

class Buttons extends React.Component {
    constructor(props){
        super(props)

        this.state={
            show: false,
            starValue: null,
            userName: '',
            characteristics: {},
            Title: '',
            description: '',
            email: '',
            recommend: null,
            photos: []
        }
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
        this.handleChar = this.handleChar.bind(this)
        this.handleDescription = this.handleDescription.bind(this)
        this.handleTitle = this.handleTitle.bind(this)
        this.handleUsername = this.handleUsername.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleStarChange = this.handleStarChange.bind(this)
        this.handleRec = this.handleRec.bind(this)
        this.handleEmail = this.handleEmail.bind(this)

    
    }

    open() {
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
        
    }

    handleTitle(e) {
        this.setState({
            title: e.target.value
        })
        
    }

    handleDescription(e) {
        this.setState({
            description: e.target.value
        })
      
    }

    handleChar(e){
        var obj = this.state.characteristics;
        obj[e.target.id] = e.target.value
        this.setState({
            characteristics: obj
        })
        
    }

    handleStarChange(e){
        this.setState({
            starValue: e.target.value
        })
    }

    handleEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    handleRec(e){
        this.setState({
            recommend: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const newReview = {
            email: this.state.email,
            rating: this.state.starValue,
            summary: this.state.title,
            body: this.state.description,
            recommend: this.state.recommend,
            name: this.state.userName,
            email: this.state.email,
            photos: this.state.photos,
            characteristics: this.state.characteristics
        }
        axios.post(`${constants.API_URL}/reviews/${this.props.reviews.product}`, newReview)
        .then(() => {
            this.setState({
                show: false,
                starValue: null,
                userName: '',
                characteristics: {},
                Title: '',
                description: '',
                email: '',
                recommend: null
            })
        })
        .catch((err) => {
            console.log('error in new review post: ', err)
        })
        this.close()
    }


    render() {
        
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
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter Email" onChange={this.handleEmail} />
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
                            <Form.Label>Would you recommend this product?</Form.Label>
                            <div display="flex" style={{justifyContent: "space-around", width: "100%"}}>
                                <Form.Check
                                type="radio"
                                label="Yes"
                                name='recommend'
                                value={1}
                                onClick={this.handleRec}
                                inline
                                />
                                <Form.Check
                                type="radio"
                                label="No"
                                name='recommend'
                                value={0}
                                onClick={this.handleRec}
                                inline
                                />
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Category Ratings</Form.Label>
                            <Characteristics reviews={this.props.reviews} handleChar={this.handleChar}/>
                        </Form.Group>
                        <Form.Group style={{justifyContent: 'center', display: "flex"}}>
                            <div style={{width: '100%'}}>Rating</div>
                        </Form.Group>
                        <div style={{justifyContent: 'center', display: "flex"}}>
                            <Rating size="small" name="rating" onChange={this.handleStarChange} value={this.state.starValue}/>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={this.close}>Close</button>
                    <button onClick={this.handleSubmit}>Submit</button>
                </Modal.Footer>
            </Modal>

            <GetReviewsContainer id={this.props.reviews.product}/>
            <button className="review-button" onClick={this.open}>Add Review</button>
        </div>
        )
    }
}


export default Buttons