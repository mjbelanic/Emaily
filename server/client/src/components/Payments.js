import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
	render() {
		return (
			<StripeCheckout
				//title and description appear in header of form
				name="Emaily"
				description="$5 for 5 email credits."
				// calculated in cents so 500 = 5.00
				amount={500}
				// callback function that will be called
				// after we have successfully retrieved an
				//authorization token from the Stripe API.
				token={token => this.props.handleToken(token)}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
			>
				<button className="btn">Add Credits</button>
			</StripeCheckout>
		);
	}
}

export default connect(null, actions)(Payments);
