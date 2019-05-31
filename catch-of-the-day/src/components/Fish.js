// Import Components
// * Must import React
import React from 'react';
import { formatPrice } from '../helpers';


// Create Component
class Fish extends React.Component {

    // Render Component to DOM  
    // This is where we put our HTML for components and attach Props
    render() {
        const { image, name, price, desc, status } = this.props.details;
        const isAvailable = status === 'available';
        return (

            <li className="menu-fish">
                <img src={image} alt={name} />
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button 
                    disabled={!isAvailable}
                    // onClick run .addToOrder() & pass the index (key value) via props
                    onClick={() => this.props.addToOrder(this.props.index)}>
                        {isAvailable ? 'Add To Order' : 'Sold Out!'}
                </button>
            </li>

        );
    }
}

//Export Component
// * Components must be exported (also can be done on the same line when you create a component)
export default Fish;