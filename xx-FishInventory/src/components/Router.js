import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './StorePicker';
import NotFound from './NotFound';
import App from './App';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ StorePicker } />
            <Route exact path="/store/:storeID" component={ App } />
            <Route component={ NotFound } />
        </Switch>
    </BrowserRouter>
)

export default Router;
