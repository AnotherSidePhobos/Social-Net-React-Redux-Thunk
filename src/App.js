import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DialogsContainer from './components/Messages/DialogsContainer';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import NavbarContainer from './components/Navbar/NavbarContainer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import { compose } from 'redux';
import {initializeApp} from './redux/appReducer';
import Loading from './components/Loading/Loading';

class App extends Component {

    componentDidMount(){
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Loading/>
        }

        return (
            <div className="App">
                <NavbarContainer/>
                <div className='container'>
                    <Switch>
    
                    <Route path="/dialogs" component={DialogsContainer} />
                    <Route path="/users" component={UsersContainer} />
                    <Route path="/music" component={Music} />
                    <Route path="/profile/:userId?" component={ProfileContainer} />
                    <Route path='/' exact component={ProfileContainer}/>
                    <Route path="/login" component={Login} />
                    <Route component={PageNotFound}/>
    
                    </Switch>
                </div>
    
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        initialized: state.app.initialized
    }
}


export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);