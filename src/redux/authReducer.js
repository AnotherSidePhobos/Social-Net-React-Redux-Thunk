import {authMeAPI} from './../API/api';



const SET_USER_DATA = 'SET_USER_DATA';

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
                ...action.data,
                isAuth: true
            }
    
        default: return state
    }
}

export const setAuthUserData = (id, email, login) =>{
    return{
        type: SET_USER_DATA,
        data: {
            id,
            email, 
            login
        }
    }
}

// this is a thunk creator!
export const getAuthMe = () =>{
    return (dispatch) => {
        authMeAPI()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {email, id, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login))
            }
            });
    }

}


export default authReducer;