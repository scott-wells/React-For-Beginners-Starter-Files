// Import Components
// * Must import React first
import React from 'react';

// Creating React Component
// A React Component is a type of inheritable class
class Fish extends React.Component {

    // Render Component to DOM
    // Components must be rendered to be visible on the DOM
    // This is where we put our HTML for components and attach Props
    render() {
        return (
            
            <li className="menu-fish">
                <img scr={this.props.details.image} alt={this.props.details.name} />
                <h3 className="fish-name">
                    {this.props.details.name}
                </h3>
                
            </li>
        )
    }
}

//Exporting Component
// * Components must be exported (also can be done on the same line when you create a component)
export default Fish;