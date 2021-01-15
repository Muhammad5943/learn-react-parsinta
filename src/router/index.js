import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';

function Router() {
    return (
        // <BrowserRouter> (BrowserRouter bisa dimasukkan dalam /index.js 'utama', setelah itu tidak di declear disini)
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/about">
                    <About />
                </Route>

                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        // </BrowserRouter>
    );
}

export default Router;