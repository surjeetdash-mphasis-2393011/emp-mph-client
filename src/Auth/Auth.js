import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={SignIn} />
                <Route path='/SignUp' component={SignUp} />
                <Route path='/ForgotPassword' component={ForgotPassword} />
            </Switch>
        </BrowserRouter>
    </main>
)

export default Main
