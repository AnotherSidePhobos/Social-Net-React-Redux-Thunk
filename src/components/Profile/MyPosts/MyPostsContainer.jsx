import React from 'react';
import MyPosts from './MyPosts';
import moduleName from 'module'
import {addPostActionCreater} from './../../../redux/profileReducer';
import {updateNewPostTextActionCreater} from './../../../redux/profileReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) =>{

    return{
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) =>{

    return{
        addPost: () =>{
            dispatch(addPostActionCreater());
        },
        updateNewPostText: (text) =>{

            dispatch(updateNewPostTextActionCreater(text));
        }

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
