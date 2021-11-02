import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Navbar } from './Navbar';
import { authMe } from './../../API/api';
import {setAuthUserData} from './../../redux/authReducer';
import {getAuthMe, logout} from './../../redux/authReducer';
import axios from 'axios';

class NavbarContainer extends Component {


    render() {
        return (
            <Navbar {...this.props}/>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect(mapStateToProps, {logout})(NavbarContainer);
