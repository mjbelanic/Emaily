// SurveyField contains logic to render a single
// label and text input
import React, { Component } from "react";

// takes the property of input from props
// and places in a variable called input
//                 \/
export default ({ input, label, meta: { error, touched } }) => {
	return (
		<div>
			<label>{label}</label>
			<input {...input} style={{ marginBottom: "5px" }} />
			<div className="red-text" style={{ marginBottom: "20px" }}>
				{touched && error}
			</div>
		</div>
	);
};
