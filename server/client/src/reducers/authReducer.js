import { FETCH_USER } from "../actions/types";

export default function(state = null, action) {
	switch (action.type) {
		case FETCH_USER:
			// An empty string is treated as a falsy value
			//  because of this, we are ensuring an empty string
			// is not returned by adding and OR false.
			// ('' || false) == false
			// Now the state will always be: null, on, or false;
			return action.payload || false;
		default:
			return state;
	}
}
