import { actions } from "react-table";
import { act } from "@testing-library/react";

const initState = {
    user : "",
    password : "",
    auth_token: "null"
}

const rootReducer = (state = initState,action) =>{
    if (action.type ==='EDIT_USERNAME'){
        return{
            ...state,
            user:action.user
        }
    }
    if (action.type ==='EDIT_PASSWORD'){
        return{
            ...state,
            password:action.password
        }
    }
    if(action.type ==='AUTHENTICATE'){
        return{
            ...state,
            auth_token : action.auth_token
        }
    }
    return state;
}

export default rootReducer