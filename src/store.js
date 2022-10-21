import degreeReducers from "./redux/reducers/degreeReducers";
import employeeReducer from "./redux/reducers/employeeReducer";
import positionsReducer from "./redux/reducers/positionsReducer";
import { createStore,applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";

export default createStore(combineReducers({degreeReducers,employeeReducer,positionsReducer}) ,applyMiddleware(logger))