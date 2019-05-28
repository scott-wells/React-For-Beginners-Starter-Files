// Import Components
// * Must import React first
import React from 'react';
// Use { BrowserRouter, Route, Switch } to change our URLs
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './StorePicker';
import App from './App';
import NotFound from './NotFound';

// Create Component
// This is a stateless functional component
// This component routes our URLs in our app
const Router = () => (
    <BrowserRouter>
        {/* Switch tries each route & routes to the first one that is true */}
        <Switch>
            {/* // takes props
                // 'exact' makes the URL that 'path' specifically
                // 'path' appends a string
                // 'component' appends the component we want to route to */}
            <Route exact path="/" component={StorePicker} />
            <Route path="/store/:storeId" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

// Export Component
export default Router;