// ALWAYS import react
import React from 'react';

// Stateless Functional Component
// this comopnent only uses a render() && proptypes
// doesn't need to be a "full-blown component" OR "this.props"
// function expression with an arrow function; passes "props" as an argument
const Header = (props) => (

        <header className="top">
            <h1>
                Catch 
                <span className="ofThe">
                    <span className="of">Of</span> 
                    <span className="the">The</span>
                </span> 
                Day
            </h1>
            <h3 className="tagline">
                {/* this = component instance, 
                    props = object inside component,
                    tagline = the prop */}
                <span>{props.tagline}</span>
            </h3>        
        </header>
        
    );

export default Header;