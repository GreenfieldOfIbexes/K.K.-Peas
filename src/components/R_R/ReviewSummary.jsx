import React from "react";
import { ProgressBar } from "react-bootstrap";
import Stars from "./Stars.jsx";
import Gauge from "./Gauge/Gauge.jsx";
import StarfilterContainer from "../../containers/R_R/StarfilterContainer.js"
import "./ReviewSummary.css";

class ReviewSummary extends React.Component {    
    render() {
       const ratings = this.props.reviewMetaData.ratings;
       const ratingsArray = [];
       var total = 0;
       const avg = this.props.avg_review.toFixed(1)
       if(ratings){
            for(var keys=1; keys < 6; keys++){
                if(!ratings[keys]){
                    ratingsArray.push([keys, 0])
                } else {
                    ratingsArray.push([keys, ratings[keys]]);
                    total += ratings[keys];
                }
            }
       }
       const recommended = this.props.reviewMetaData.recommended
       if(recommended){
            var recommendedPercent = recommended["1"]/(recommended["0"] + recommended["1"] + recommended.null) * 100
            recommendedPercent = Math.round(recommendedPercent)
        }
       const characteristics = this.props.reviewMetaData.characteristics
       const charArray = []
       for(var key in characteristics){
            switch(key){
                case("Comfort"):
                    charArray.push([characteristics[key].value, key, ["Not", "Very"]])
                    break;
                case("Fit"):
                    charArray.push([characteristics[key].value, key, ["Too Small", "Perfect", "Too Large"]])
                    break;
                case("Length"):
                    charArray.push([characteristics[key].value, key, ["Too Short", "Perfect", "Too Long"]])
                    break;
                case("Quality"):
                    charArray.push([characteristics[key].value, key, ["Poor", "High"]])
                    break;
                default:
                    break;
            } 
       }
       var stars = 0;
        return (
        <>
            <div className="summary-row" style={{margin: "0px 0px 20px 0px"}}>
                <div style={{margin: "2px 20px 2px 2px", fontSize: "50px", fontWeight: "bold"}}>
                    {avg}
                </div>
                <div className="summary-stars" style={{margin: "20px 2px 2px 0px"}}>
                    <Stars rating={this.props.avg_review} size={"40px"}/>
                </div>
            </div>
            {ratingsArray.map((rating) =>{
                stars += 1
                return (
                <div key={rating[0]} className='summary-row'>
                    <div className="item" style={{margin: "0px 2px 4px 0px"}}>
                        <StarfilterContainer value={stars} rating={rating} id={this.props.reviewMetaData.product_id}/>  
                    </div>
                    <div className="item-graph"  style={{margin: "4px 0px 4px 4px"}}>
                        <ProgressBar now={(rating[1]/total) * 100} variant="success"/>
                    </div>
                    
                    <div className="item"  style={{margin: "0px"}}>
                        ({rating[1]})
                    </div>
                </div>)
                }                    
            )}
            {charArray.map((char) => {
                return (
                <div key={char[0]} className='summary-row' style={{marginTop: "20px"}}>
                    <div className="item-graph" >
                        <Gauge labels={char[2]} characteristic={char[1]} value={char[0]}/>
                    </div>
                </div>
                )
                    })}
            <div className="summary-row recommended">
                {recommendedPercent}% of reviewers recommended this product
            </div>
        </>
        )}
}

export default ReviewSummary;
