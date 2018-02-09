import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from "./components/App";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware());

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
