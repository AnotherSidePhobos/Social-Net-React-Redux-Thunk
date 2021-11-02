import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utils/Validators/validators'
import { Input } from '../Common/FormsControls/FormsControls'
import {login, logout} from './../../redux/authReducer';
import style from './../Common/FormsControls/FormsControls.module.css';





const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='login' name={"email"} validate={[required]} component={Input}/>
            </div>
            <div>
                <Field placeholder='password' name={"password"}  validate={[required]} component={Input}/>
            </div>
            <div>
                <Field  component={Input} name={"rememberMe"} type={'checkbox'} /> remember me
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>
            }
            <div>
                <button type={'submit'}>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
}) (LoginForm)

const Login = (props) => {

    const onSubmit = (formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe)
        console.log(formData);
    }
    if (props.isAuth) {
        return <Redirect to='/profile'/>
    }
    return (

        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )

    
    
}

const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login, logout})(Login);