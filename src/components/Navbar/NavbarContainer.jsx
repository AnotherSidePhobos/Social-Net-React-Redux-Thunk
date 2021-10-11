import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Navbar } from './Navbar';
import { authMe } from './../../API/api';
import {setAuthUserData} from './../../redux/authReducer';
import {getAuthMe} from './../../redux/authReducer';
import axios from 'axios';

class NavbarContainer extends Component {
    componentDidMount(){
        this.props.getAuthMe()
    }

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


export default connect(mapStateToProps, {getAuthMe})(NavbarContainer);
