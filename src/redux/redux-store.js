import {createStore, combineReducers, applyMiddleware} from "redux";
import authReducer from "./auth-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    authReducer,
    usersReducer,
    form:formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;