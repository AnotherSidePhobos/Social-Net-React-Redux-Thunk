import React, { Component } from 'react'
import {Profile} from './../Profile/Profile';
import { connect } from 'react-redux';
import {setUserProfileThunk} from './../../redux/profileReducer';
import {getStatus} from './../../redux/profileReducer';
import {updateStatus} from './../../redux/profileReducer';
import { withRouter } from 'react-router';

import { compose } from 'redux';

class ProfileContainer extends Component {
    
    componentDidMount(){
        
        console.log('prof props: ', this.props);
        let userId = this.props.match.params.userId;
        debugger
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.setUserProfileThunk(userId);
        this.props.getStatus(userId);

    }
    render() {
        return (
                <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}


let mapStateToProps = (state) => {
    return{
        profileInfo: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer); // hoc

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, {setUserProfileThunk})(WithUrlDataContainerComponent);

export default compose(
    connect(mapStateToProps, {setUserProfileThunk, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)