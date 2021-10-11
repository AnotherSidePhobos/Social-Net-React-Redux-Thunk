import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Navbar } from './Navbar';
import { authMe } from './../../API/api';
import {setAuthUserData} from './../../redux/authReducer';
import axios from 'axios';

class NavbarContainer extends Component {
    componentDidMount(){
        this.getAuth();
    }
    getAuth = () =>{
        authMe()
            .then(response => {
                console.log(response.data);
                if (response.data.resultCode === 0) {
                    let {email, id, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login)
                }
                });
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


export default connect(mapStateToProps, {setAuthUserData})(NavbarContainer);
