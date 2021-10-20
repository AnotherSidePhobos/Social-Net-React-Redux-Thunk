import {getOneUserAPI} from './../API/api';
import {getStatusAPI} from './../API/api';
import {updateStatusAPI} from './../API/api';


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsData: [
        { id: 1, message: "Hi, How are you?", likesCount: 12 },
        { id: 2, message: "it's raining men", likesCount: 4 },
        { id: 3, message: "halilullah", likesCount: 23 },
    ],
    profile: null,
    status: ''
};

export const profileReducer = (state = initialState, action) =>{

    switch(action.type){
        case ADD_POST:{
            let newPost = {
                id: 4,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            } 
        }
        case SET_USER_PROFILE:
            return{
                ...state,
                profile: action.profile
        }
        case SET_STATUS:
            return{
                ...state,
                status: action.status
        }
        default:
            return state;
    }
    return state;
}

export const addPostActionCreater = (newPostText) =>{
    
    return {
        type: ADD_POST,
        newPostText
    }
}

export const setUserProfile = (profile) => {
    return{
        type: SET_USER_PROFILE,
        profile
    }
}
export const setStatus = (status) => {
    return{
        type: SET_STATUS,
        status
    }
}

//this is a thunk
export const setUserProfileThunk = (userId) =>{
    return (dispatch) => {
        getOneUserAPI(userId)
        .then(response => {
                dispatch(setUserProfile(response.data))
            });
    }
}
export const getStatus = (userId) =>{
    return (dispatch) => {
        getStatusAPI(userId)
        .then(response => {
            debugger
                dispatch(setStatus(response.data))
            });
    }
}
export const updateStatus = (status) =>{
    return (dispatch) => {
        updateStatusAPI(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        });
    }
}








export default profileReducer;