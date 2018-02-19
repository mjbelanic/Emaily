// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from "react";
import { reduxForm } from "redux-form";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends Component {
	// same as:
	// constructor(props) {
	// 	super(props);
	//
	// 	this.state = { new: true };
	// }
	state = { showFormReview: false };

	renderContent() {
		if (this.state.showFormReview) {
			return (
				<SurveyFormReview
					onCancel={() => this.setState({ showFormReview: false })}
				/>
			);
		}
		return (
			<SurveyForm
				onSurveySubmit={() => this.setState({ showFormReview: true })}
			/>
		);
	}

	render() {
		return <div>{this.renderContent()}</div>;
	}
}

// We tied the this component to the surveyForm
// but this time, we did not pass the destroyOnUnmount
// function when the form was made. This means whenever
// the user navigates away from this compoent, the values
// get cleared. Remember destroyOnUnmount defaults to true
export default reduxForm({
	form: "surveyForm"
})(SurveyNew);
