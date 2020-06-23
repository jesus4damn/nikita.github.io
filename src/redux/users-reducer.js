import {usersAPI} from "../api/api";

const SET_USERS = "auth/SET_USERS";

let initialState = {
    users:[]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
        {
            return {...state};
        }
        default:
            return state;
    }
}


export const setUsers = (token, auth) => ({type:SET_USERS, token, auth});

export const getUsers = (token) => async dispatch => {
    let response = null;
    try
    {
        response = await usersAPI.get(token);
    }
    catch
    {
        console.log("ErrorGetUsers");
        return;
    }
    console.log(response);
    // if(response.statusText === "Bad Request"){
    //     dispatch(stopSubmit("login", {_error: "Wrong data!"}));
    // } else {
    //     //dispatch(setUsers());
    // }
}


export default usersReducer;