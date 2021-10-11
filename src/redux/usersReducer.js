import React from 'react'
import {getUsersAPI} from './../API/api';
import {followAPI} from './../API/api';
import {unFollowAPI} from './../API/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';


let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
                return{
                    ...state,
                    users: state.users.map( u => {
               
                        if (u.id == action.userId) {
                            return{ ...u, followed: true}
                        }
                        return u;
                })
            }
        case UNFOLLOW:
                return{
                    ...state,
                    users: state.users.map( u => {
               
                        if (u.id == action.userId) {
                            return{ ...u, followed: false}
                        }
                        return u;
                })
            }
        case SET_USERS:
                return{
                    ...state,
                    users: action.users
                }
        case SET_CURRENT_PAGE:
                return{
                    ...state,
                    currentPage: action.page
                }
        case SET_TOTAL_USER_COUNT:
                return{
                    ...state,
                    totalUserCount: action.count
                }
        case TOGGLE_FETCHING:
                return{
                    ...state,
                    isFetching: action.isFetch
                }
            
        default: return state;
    }
}

export const followSucces = (userId) => {
    debugger
    return{
        type: FOLLOW, 
        userId
    }
}
export const unfollowSucces = (userId) => {
    debugger
    return{
        type: UNFOLLOW, 
        userId
    }
}
export const setUsers = (users) => {
    return{
        type: SET_USERS, 
        users
    }
}
export const setCurrentPage = (page) => {
    return{
        type: SET_CURRENT_PAGE, 
        page
    }
}
export const setTotalUsersCount = (count) => {
    return{
        type: SET_TOTAL_USER_COUNT, 
        count
    }
}
export const toggleFetching = (isFetch) => {
    return{
        type: TOGGLE_FETCHING,
        isFetch
    }
}


// мы не модем делать асинхронные запросы в reducer, потому что 
// reducer должен отрабатывать быстро, и чтобы сдлеать запрос внутри reducer
// мы используем thunk
export const getUsers = (currentPage, pageSize) =>{
    debugger
    return (dispatch) =>{
     dispatch(toggleFetching(true));

     debugger
        getUsersAPI(currentPage, pageSize)
        .then(response => {
            dispatch(toggleFetching(false));
            dispatch(setUsers(response.items))
            dispatch(setCurrentPage(currentPage))
            dispatch(setTotalUsersCount(response.totalCount))
        });
    }
}

//thunk follow
export const follow = (userId) =>{
    
    return (dispatch) => {
        followAPI(userId)
        .then(response => {
          if (response.data.resultCode == 0) {
                dispatch(followSucces(userId));
            }
        });
    } 
}
//thunk unfollow
export const unFollow = (userId) =>{
    
    return (dispatch) => {
        unFollowAPI(userId)
        .then(response => {
          if (response.data.resultCode == 0) {
                dispatch(unfollowSucces(userId));
            }
        });
    } 
}

export default usersReducer;
