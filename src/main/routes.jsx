import React from 'react'

import Todo from '../todo/Todo'
import About from '../about/about'

import {
    HashRouter,
    Route,
    Link,
    Redirect
} from 'react-router-dom';

export default props => (
    <HashRouter>
        <div>
            <Route path='/todos' component={Todo} />
            <Route path='/about' component={About} />
            <Route exact path="/" render={() => (
                <Redirect to="/todos" />
            )} />
        </div>
    </HashRouter>
)
