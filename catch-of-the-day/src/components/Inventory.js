// Import Components
// * Must import React first
import React from 'react';
import AddFishForm from './AddFishForm';

// Creating React Component
// A React Component is a type of inheritable class
class Inventory extends React.Component {

    // Render Component to DOM
    // Components must be rendered to be visible on the DOM
    // This is where we put our HTML for components and attach Props
    render() {
        return (
            // Props to be passed down to AddFishForm - addFish
            // Activate method loadSampleFishes when button is clicked
            <div className="inventory">
                <h2>Inventory</h2>
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
            </div>
        )
    }
}

//Exporting Component
// * Components must be exported (also can be done on the same line when you create a component)
export default Inventory;