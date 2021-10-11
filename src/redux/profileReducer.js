const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postsData: [
        { id: 1, message: "Hi, How are you?", likesCount: 12 },
        { id: 2, message: "it's raining men", likesCount: 4 },
        { id: 3, message: "halilullah", likesCount: 23 },
    ],
    newPostText: "",
    profile: null,
};

export const profileReducer = (state = initialState, action) =>{

    switch(action.type){
        case ADD_POST:{
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            } 
        }
        case UPDATE_NEW_POST_TEXT:{
            return{
                ...state,
                newPostText: action.newText,
            };
        }
        case SET_USER_PROFILE:
            return{
                ...state,
                profile: action.profile
        }
        default:
            return state;
    }
    return state;
}

export const addPostActionCreater = () =>{
    
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreater = (text) =>{
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export const setUserProfile = (profile) => {
    return{
        type: SET_USER_PROFILE,
        profile
    }
}
export default profileReducer;