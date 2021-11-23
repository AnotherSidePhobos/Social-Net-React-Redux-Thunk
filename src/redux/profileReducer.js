import {getOneUserAPI} from './../API/api';
import {getStatusAPI} from './../API/api';
import {updateStatusAPI} from './../API/api';


const ADD_POST = 'PROFILE/ADD-POST';
const DELETE_POST = 'PROFILE/DELETE_POST';
const SET_USER_PROFILE = 'PROFILE/SET_USER_PROFILE';
const SET_STATUS = 'PROFILE/SET_STATUS';

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
        case DELETE_POST:
            return{
                ...state,
                postsData: state.postsData.filter((post) => post.id !== action.postId)
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
export const deletePost = (postId) =>{
    
    return {
        type: DELETE_POST,
        postId
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
    return async (dispatch) => {
        let response = await getOneUserAPI(userId)
        dispatch(setUserProfile(response.data))
    }
}
export const getStatus = (userId) =>{
    return async (dispatch) => {
        let response = await getStatusAPI(userId)
        dispatch(setStatus(response.data))
    }
}
export const updateStatus = (status) =>{
    return async (dispatch) => {
        let response = await updateStatusAPI(status)
        if (!response.data.resultCode) {
            dispatch(setStatus(status))
        }
    }
}








export default profileReducer;