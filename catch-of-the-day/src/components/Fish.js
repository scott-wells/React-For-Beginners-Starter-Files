// Import Components
// * Must import React first
import React from 'react';
import { formatPrice } from '../helpers';

// Creating React Component
// A React Component is a type of inheritable class
class Fish extends React.Component {

    // Render Component to DOM
    // Components must be rendered to be visible on the DOM
    // This is where we put our HTML for components and attach Props
    render() {

        const {image, name, price, desc, status} = this.props.eachFish;

        return (

            <li className="menu-fish">
                <img src={image} alt={name} />
                <h3 className="fish-name">
                {name}
                <span className="price">{formatPrice(price)}</span>
                </h3>  
                <p>{desc}</p>
                <button>Add To Cart</button>
            </li>
        )
    }
}

//Exporting Component
// * Components must be exported (also can be done on the same line when you create a component)
export default Fish;