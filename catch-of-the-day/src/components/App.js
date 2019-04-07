// Import Components
// * Must import React first
// This is our mama/top-level component
import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';


// Creating React Component
// A React Component is a type of inheritable class
class App extends React.Component {

    // Creating Initial State
    // This is where State lives and will be passed down from via Props
    // What data do we need to update for our app - that's our state
    // State and the methods that update State have to live in the same component
    state = {
        fishes: {},
        order: {}
    };

    // Component Methods

    // This method is passed down to the AddFishForm component
    // We use the 'fish' object from AddFishForm as a parameter
    addFish = fish => {
       // 1. Take a copy of an existing state 
       // Spread Operator used to make a copy of this state
       const fishes = {...this.state.fishes};

       // 2. Add our new fish to the fishes variable
       fishes[`fish${Date.now()}`] = fish;

       // 3. Set the new fishes object to state
       // Pass .setState the piece of state you wish to update - key
       // Pass .setState the variable you wish to update it to - value
       this.setState({ fishes: fishes });
    }

    // This method is passed down to the Inventory component for an onClick event
    loadSampleFishes = () => {
        // Pass .setState the piece of state you wish to update - 'fishes'
        // Pass .setState the variable (in this case, a component of JSON data) you wish to update it to - 'sampleFishes' 
        this.setState({ fishes: sampleFishes });
    }

    // Render Component to DOM
    // Components must be rendered to be visible on the DOM
    // This is where we put our HTML for components and attach Props
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        {/* Take the initial state and map it to a new array with unique keys */}
                        {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} />)}
                    </ul>
                </div>

                <Order />

                {/* Props to be passed down to Inventory - addFish, loadSampleFishes */}
                {/* You can name props anything, but it's best to stay consistent */}
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
            </div>  
        )
    }
}

//Exporting Component
// * Components must be exported (also can be done on the same line when you create a component)
export default App;