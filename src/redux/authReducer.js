import { stopSubmit } from 'redux-form';
import {authMeAPI, loginAPI, logoutAPI} from './../API/api';



const SET_USER_DATA = 'AUTH/SET_USER_DATA';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_USER_DATA:
            debugger
            return{
                ...state,
                ...action.payload
            }
    
        default: return state
    }
}

export const setAuthUserData = (id, email, login, isAuth) =>{
    return{
        type: SET_USER_DATA,
        payload: {
            id,
            email, 
            login,
            isAuth
        }
    }
}

// this is a thunk creator!
export const getAuthMe = () =>{
    return async (dispatch) => {
      let response = await authMeAPI()
        if (response.data.resultCode === 0) {
            let {email, id, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true))
        }
    }

}
export const login = (email, password, rememberMe) => async (dispatch) => {
  
    debugger
    let response = await loginAPI(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getAuthMe())
    }else{
    let message = response.data.messages.length > 0 ?
    response.data.messages[0] :
    "Some Error"
    dispatch(stopSubmit(login, {_error: message}))
    }
}
export const logout = () => async (dispatch) => {
    let response = await logoutAPI()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}


export default authReducer;