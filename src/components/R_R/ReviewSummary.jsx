import React from 'react'
import {Container, Row, Col, ProgressBar} from "react-bootstrap"
import Stars from './Stars.jsx'

class ReviewSummary extends React.Component {

    
    render() {
        console.log(this.props.reviewMetaData)
       const ratings = this.props.reviewMetaData.ratings
       const ratingsArray = [];
       var total = 0;
       for(var keys in ratings){
           ratingsArray.push([keys, ratings[keys]]);
           total += ratings[keys];
       }
        return (
        <Container>
            <Row style={{margin: "0px 0px 20px 0px"}}>
                <Col md="auto" style={{margin: "2px 20px 2px 2px", fontSize: "50px", fontWeight: "bold"}}>
                    {this.props.avg_review}
                </Col>
                <Col md="auto" style={{margin: "20px 2px 2px 0px"}}>
                    <Stars rating={this.props.avg_review} size={"40px"}/>
                </Col>
            </Row>
            
            {ratingsArray.map((rating) =>{
                return (<Row>
                    <Col md="auto" style={{margin: "0px 2px 4px 0px"}}>
                        {rating[0]} Stars  
                    </Col>
                    <Col md={4} style={{margin: "4px 0px 4px 4px"}}>
                        <ProgressBar now={(rating[1]/total) * 100} variant="success"/>
                    </Col>
                    
                    <Col md="auto" style={{margin: "0px"}}>
                        ({rating[1]})
                    </Col>
                </Row>)
                }                    
            )}
            <Row>
                
            </Row>

        </Container>
        )}
}

export default ReviewSummary