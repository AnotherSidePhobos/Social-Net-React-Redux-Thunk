import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import NavbarContainer from './components/Navbar/NavbarContainer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import { compose } from 'redux';
import {initializeApp} from './redux/appReducer';
import Loading from './components/Loading/Loading';
// without suspence and lazy
// import ProfileContainer from './components/Profile/ProfileContainer';
// with suspence and lazy
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Messages/DialogsContainer'));


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
    
                    {/* <Route path="/dialogs" component={DialogsContainer} /> */}
                    <Route path="/dialogs" render={() => {
                        return (
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <DialogsContainer/>
                            </React.Suspense>
                        )
                    }} />
                    <Route path="/users" component={UsersContainer} />
                    <Route path="/music" component={Music} />
                    {/* <Route path="/profile/:userId?" component={ProfileContainer} /> */}
                    <Route path="/profile/:userId?" render={() => {
                        return (
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <ProfileContainer/>
                            </React.Suspense>
                        )
                    }} />

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