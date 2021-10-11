import React, { Component } from 'react'
import {Profile} from './../Profile/Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import {setUserProfile} from './../../redux/profileReducer';
import { withRouter } from 'react-router';

class ProfileContainer extends Component {
    
    componentDidMount(){
        debugger
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 19106
        }
        let usersFromAPI = axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
                });
    }
    render() {
        return (
                <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        profileInfo: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);