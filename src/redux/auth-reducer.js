import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH = "auth/SET_AUTH";

let initialState = {
    auth:false,
    token:""
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            {
                return {...state, token: action.token, auth: action.auth};
            }
        default:
            return state;
    }
}


export const setAuth = (token, auth) => ({type:SET_AUTH, token, auth});

export const auth = (username, password) => async dispatch => {
    let response = null;
    try
    {
        response = await authAPI.login(username, password);
    }
    catch
    {
        response = null;
        console.log("ErrorLogin");
        dispatch(stopSubmit("login", {_error: "Something is wrong with the server!"}));
        return;
    }
    if(response.statusText === "Bad Request"){
        dispatch(stopSubmit("login", {_error: "Wrong data!"}));
    } else {
        dispatch(setAuth(response.token, true));
    }
}


export default authReducer;