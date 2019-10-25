import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import Stars from "./Stars.jsx";
import Gauge from "./Gauge/Gauge.jsx";

class ReviewSummary extends React.Component {
	render() {
		console.log("props: ", this.props);
		const ratings = this.props.reviewMetaData.ratings;
		const ratingsArray = [];
		var total = 0;
		for (var keys in ratings) {
			ratingsArray.push([keys, ratings[keys]]);
			total += ratings[keys];
		}
		const characteristics = this.props.reviewMetaData.characteristics;
		const charArray = [];
		for (var key in characteristics) {
			switch (key) {
				case "Comfort":
					charArray.push([characteristics[key].value, key, ["Not", "Very"]]);
					break;
				case "Fit":
					charArray.push([
						characteristics[key].value,
						key,
						["Too Small", "Perfect", "Too Large"],
					]);
					break;
				case "Length":
					charArray.push([
						characteristics[key].value,
						key,
						["Too Short", "Perfect", "Too Long"],
					]);
					break;
				case "Quality":
					charArray.push([characteristics[key].value, key, ["Poor", "High"]]);
					break;
				default:
					break;
			}
		}
		return (
			<Container>
				<Row style={{ margin: "0px 0px 20px 0px" }}>
					<Col
						md="auto"
						style={{
							margin: "2px 20px 2px 2px",
							fontSize: "50px",
							fontWeight: "bold",
						}}>
						{this.props.avg_review}
					</Col>
					<Col md="auto" style={{ margin: "20px 2px 2px 0px" }}>
						<Stars rating={this.props.avg_review} size={"40px"} />
					</Col>
				</Row>

				{ratingsArray.map((rating) => {
					return (
						<Row key={rating[0]}>
							<Col md="auto" style={{ margin: "0px 2px 4px 0px" }}>
								{rating[0]} Stars
							</Col>
							<Col md={6} style={{ margin: "4px 0px 4px 4px" }}>
								<ProgressBar
									now={(rating[1] / total) * 100}
									variant="success"
								/>
							</Col>

							<Col md={1} style={{ margin: "0px" }}>
								({rating[1]})
							</Col>
						</Row>
					);
				})}
				{charArray.map((char) => {
					return (
						<Row style={{ marginTop: "20px" }}>
							<Col md={{ span: 8 }}>
								<Gauge
									labels={char[2]}
									characteristic={char[1]}
									value={char[0]}
								/>
							</Col>
						</Row>
					);
				})}
			</Container>
		);
	}
}

export default ReviewSummary;
