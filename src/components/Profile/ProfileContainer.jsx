import React, { Component } from 'react'
import {Profile} from './../Profile/Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import {setUserProfile} from './../../redux/profileReducer';
import {setUserProfileThunk} from './../../redux/profileReducer';
import {getStatus} from './../../redux/profileReducer';
import {updateStatus} from './../../redux/profileReducer';
import { withRouter } from 'react-router';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends Component {
    
    componentDidMount(){
        
        console.log(this.props);
        let userId = this.props.match.params.userId;
        
        if (!userId) {
            userId = 19106
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
        status: state.profilePage.status
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