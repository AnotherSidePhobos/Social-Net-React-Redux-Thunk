import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

export const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Social net</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className={s.links}>
                    <div className="navbar-nav">
                        <NavLink className="nav-link" to="/profile">Profile</NavLink>
                        <NavLink className="nav-link" to="/dialogs">Messages</NavLink>
                        <NavLink className="nav-link" to="/music">Music</NavLink>
                        <NavLink className="nav-link" to="/users">Users</NavLink>
                    </div>
                    {
                        props.isAuth ? 
                        <div className="navbar-nav">
                            <NavLink className="nav-link" to="/login">You logged as:  <strong>{props.login}</strong></NavLink>
                        </div>

                        :
                        <div className="navbar-nav">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                        </div>
                    }
                </div>


                </div>
            </div>
        </nav>
    )
}
