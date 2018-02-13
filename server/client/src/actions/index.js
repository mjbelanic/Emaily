import axios from "axios";
import { FETCH_USER } from "./types";

// vanilla action
//const fetchUser = () => {
//	axios.get("/api/current_user");
//};

// action with redux-thunk
export const fetchUser = () => async dispatch => {
	const res = await axios.get("/api/current_user");
	dispatch({ type: FETCH_USER, payload: res.data });
};
