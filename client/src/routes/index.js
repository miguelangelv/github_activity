import React from 'react'
import { Route, Switch } from 'react-router'
import Repos from '../components/Repos/Repos';
import Details from '../components/Details/Details';
import About from '../components/About/About';
import NoMatch from '../components/NoMatch/NoMatch';


const routes = (
    <>
        <Switch>
            <Route exact path="/" component={Repos} />
            <Route path="/details" component={Details} />
            <Route path="/about" component={About} />
            <Route component={NoMatch} />
        </Switch>
    </>
)

export default routes