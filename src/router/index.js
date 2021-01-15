import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';
import NotFound from '../views/errors/NotFound';
import NavBar from '../components/Navbar';
import Login from '../views/auth/Login';

function Router() {
    return (
        // <BrowserRouter> (BrowserRouter bisa dimasukkan dalam /index.js 'utama', setelah itu tidak di declear disini)
            <Switch>
                <Route exact path="/">
                    <NavBar>
                        <Home />
                    </NavBar>
                </Route>

                <Route path="/about">
                    <NavBar>
                        <About />
                    </NavBar>
                </Route>

                <Route path="/contact">
                    <NavBar >
                        <Contact />
                    </NavBar>
                </Route>

                <Route path="/login" component={Login} />

                <Route path="*" component={NotFound} />
            </Switch>
        // </BrowserRouter>
    );
}

export default Router;