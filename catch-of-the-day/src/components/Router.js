// Import Components
// * Must import React first
// This Component routes our URLs in our app
// Use { BrowserRouter, Route, Switch } to change our URLs
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './StorePicker';
import App from './App';
import NotFound from './NotFound';

// Create Component
// This is a stateless functional component
// Switch tries each route and routes to the first one that is true
// Takes props - 'path' appends a string, 'component' appends a component
const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker} />
            <Route path="/store/:storeId" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

//Export Components
export default Router;