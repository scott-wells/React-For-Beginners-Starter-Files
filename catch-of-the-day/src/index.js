// ALWAYS IMPORT 'React' && { render }
// this import is required for the app
import React from 'react';
// this module renders the app in the view
import { render } from 'react-dom';

// this is our stylesheet
import './css/style.css';

// import any components to be used in the App 
import Router from "./components/Router";


// this mounts the component StorePicker in the view;
// the id #main corresponds with an empty div in index.html
render(<Router />, document.querySelector('#main'));
