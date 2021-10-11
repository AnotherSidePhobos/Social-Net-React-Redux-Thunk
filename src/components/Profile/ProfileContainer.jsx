import React, { Component } from 'react'
import {Profile} from './../Profile/Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import {setUserProfile} from './../../redux/profileReducer';
import {setUserProfileThunk} from './../../redux/profileReducer';
import { withRouter } from 'react-router';
import {Redirect} from 'react-router-dom'

class ProfileContainer extends Component {
    
    componentDidMount(){

        let userId = this.props.match.params.userId;
        
        if (!userId) {
            userId = 19106
        }
        this.props.setUserProfileThunk(userId)

    }
    render() {
        if (!this.props.isAuth) {
            <Redirect to='/login'/>
        }

        return (
                <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        profileInfo: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfileThunk})(WithUrlDataContainerComponent);