import { combineReducers } from "redux";

import homepageReducers from "../features/Homepage/reducers";

const appReducer = combineReducers({
  // Add your reducers here
  homepageReducers
});

export default appReducer;
