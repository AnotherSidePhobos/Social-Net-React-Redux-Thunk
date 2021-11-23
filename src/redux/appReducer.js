import { stopSubmit } from 'redux-form';
import {authMeAPI, loginAPI, logoutAPI} from '../API/api';
import {getAuthMe} from './authReducer';


const SET_INITIALIZED_SUCCESS = 'APP/SET_INITIALIZED_SUCCESS';

const initialState = {
    initialized: false
 
}
const appReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            debugger
            return{
                ...state,
                initialized: true
            }
    
        default: return state
    }
}

export const initialisedSuccess = () =>{
    return{
        type: SET_INITIALIZED_SUCCESS
    }
}

export const initializeApp = () => (dispatch) =>{

    let promise = dispatch(getAuthMe())
    debugger
    Promise.all([promise])
    .then(() => {
        dispatch(initialisedSuccess())
    })
}


export default appReducer;