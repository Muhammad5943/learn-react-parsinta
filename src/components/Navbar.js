import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authUser } from '../store';
/* import { UserProvider } from '../views/context/User';
import AuthenticatedUser from './AuthenticatedUser'; */


function Navbar({ children }) {
    const {user} = useRecoilValue(authUser)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Your App</NavLink>
                    <button 
                        className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                        aria-expanded="false" aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/users">Users</NavLink>
                            </li>

                            {/* when you using recoil */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/users">{user.name}</NavLink>
                            </li>

                            {/* when yuy prefer using useContext */}
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    <UserProvider>
                                        <AuthenticatedUser />
                                    </UserProvider>
                                </NavLink>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="py-4">
                { children }
            </div>
        </div>
    );
}

export default Navbar;