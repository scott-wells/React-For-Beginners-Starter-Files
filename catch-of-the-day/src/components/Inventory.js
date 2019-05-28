// Import Components
// * Must import React first
import React from 'react';
import AddFishForm from './AddFishForm';


// Create Component
class Inventory extends React.Component {

    // Render Component to DOM
    // Components must be rendered to be visible on the DOM
    // This is where we put our HTML for components and attach Props
    render() {
        return ( 

            <div className="inventory">
                <h2>Inventory</h2>
                {/* addFish() has been passed via props */}
                {/* we must reference 'props' - this.PROPS.addFish */}
                <AddFishForm addFish={this.props.addFish} /> 
                {/* loadSampleFishes() has been passed via props */}
                <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
            </div>

        );
    }
}

//Export Component
// * Components must be exported (also can be done on the same line when you create a component)
export default Inventory;