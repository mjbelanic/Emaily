import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

//to test api email call
import axios from "axios";
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// takes two arguments
// 1 : root component
// 2 : where we atttempted to render that component
//     inside of our DOM;
ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#root")
);

console.log("STRIPE KEY IS: " + process.env.REACT_APP_STRIPE_KEY);
console.log("Environment is: " + process.env.NODE_ENV);
