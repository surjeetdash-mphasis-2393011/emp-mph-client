import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import People from '../People/People';
import Teams from '../Teams/Teams';
import Forums from '../Forums/Forums';


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/People' component={People} />
                <Route path='/Teams' component={Teams} />
                <Route path='/Forums' component={Forums} />
            </Switch>
        </BrowserRouter>
    </main>
)

export default Main
