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
        order: {},
    }

    // Component Methods

    // This method is passed down to the AddFishForm component
    // We use the 'fish' object from AddFishForm as a parameter
    addFish = fish => {
        
       // current state of 'fishes' is copied into a new variable
       // spread operator used to make a copy of this state
       const fishes = {...this.state.fishes};

       // pass in the 'fish' object & add it to fishes (our state)
       // Date.now() gives us time in ms since Jan 1, 1970; essentially a unqiue value
       fishes[`fish${Date.now()}`] = fish;

        // update state with the new 'fishes' object
        // Pass .setState() the piece of state you wish to update - key
        // Pass .setState() the variable you wish to update it to - value
        this.setState({
            fishes: fishes
        });
    };

    // This method is passed down to the Inventory component for an onClick event
    loadSampleFishes = () => {
        
        // Pass .setState the piece of state you wish to update - 'fishes'
        // Pass .setState the variable (in this case, a component of JSON data) you wish to update it to - 'sampleFishes' 
        this.setState({ fishes: sampleFishes});
    }
       
   

    // Render Component to DOM
    // Components must be rendered to be visible on the DOM
    // This is where we put our HTML for components and attach Props
    render() {
        return (

            <div className="catch-of-the-day">
                <div className="menu">
                    {/* below is a custom tag for a component */}
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        {/* - 'fishes' is an object with key/value pairs *see above
                            - Object.keys turns 'fishes' into an array of keys (indexes)
                            - we reference the object in our state & map over each key in the now array of 'fishes'
                            - we also need to pass a unique identifier to each key in the array - key={key} */}
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish 
                                key={key} 
                                index={key}
                                details={this.state.fishes[key]}
                                addToOrder={this.addToOrder}
                            />
                        ))}
                    </ul> 
                </div>
                <Order />
                <Inventory 
                    // methods are passed via props
                    // we don't neeed to reference 'props' yet - 'this.PROPS.addFish'
                    addFish={this.addFish} 
                    loadSampleFishes={this.loadSampleFishes} 
                />
            </div>  

        );
    }
}

//Exporting Component
// * Components must be exported (also can be done on the same line when you create a component)
export default App;