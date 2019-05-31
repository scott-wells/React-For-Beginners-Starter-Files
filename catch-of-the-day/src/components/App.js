// Import Components
// * Must import React first
// This is our mama/top-level component
import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';


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

    // Lifecycle Methods

    // The next to methods make sure we sync to our cloud database AND
    // that our data persists even if the page is reloaded. In other words,
    // we don't create a new store if a user refreshes the page or goes back
    // in the browser.

    // fires when the component mounts
    // we grab localStorage - 'storeId'
    // if localStorage already exists, .setState() for 'order' so it doesn't dissappear on page refresh
    // use JSON.parse() to turn string into an object
    // we reference to the database with 'this.ref'
    // we sync our 'fishes' state with the database using the imported base variable
    // .syncState() also requres an object with 'context' & 'state'
    componentDidMount() {
        const { params } = this.props.match;
        const localStorageRef = localStorage.getItem(params.storeId);
        if(localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) })
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: "fishes"
        });
    }

    // fires when a component changes
    // this will be stored in the users 'localStorage'
    // .setItem() - two arguments - our 'storeId' via props && our 'order' via state
    // JSON.stringify() - if you are returning a value as a string and it gives you [object Object] --
    // -- this method will turn it into a string
    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    }

    // fires when the component unmounts
    // we reference the database with 'this.ref'
    // .removeBinding() - when a user goes back in the browser, cleans up memory
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }
    
    // Custom Methods

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

    // This method comes upstream from 'EditFishForm' to update 'fishes' state
    // takes the key & updatedFish object as arguments
    updateFish = (key, updatedFish) => {

        // make a copy of current state
        const fishes = {...this.state.fishes};

        // updates the 'fishes[key]' that was edited with the values from the 'updatedFish' object
        fishes[key] = updatedFish;

        // update state with the new 'fishes' object
        // Pass .setState() the piece of state you wish to update - key
        // Pass .setState() the variable you wish to update it to - value
        this.setState({ fishes: fishes });
    }

    // This method is passed down to the Inventory component for an onClick event, takes 'key' as an arguement
    deleteFish = (key) => {

        // make a copy of current state
        const fishes = {...this.state.fishes};

        // set the fish we're deleting to null (so it works with Firebase)
        fishes[key] = null;

        // update state with the new 'fishes' object
        this.setState({ fishes: fishes });
    }

    // This method is passed down to the Inventory component for an onClick event
    loadSampleFishes = () => {
        
        // Pass .setState the piece of state you wish to update - 'fishes'
        // Pass .setState the variable (in this case, a component of JSON data) you wish to update it to - 'sampleFishes' 
        this.setState({ fishes: sampleFishes });
    }

    // This method is passed down to the Order component for an onClick event
    addToOrder = (key) => {

        // current state of 'order' is copied into a new variable
        // spread operator used to make a copy of this state
        const order = {...this.state.order};

        // add to the order the price of the fish || update the number in our order
        order[key] = order[key] + 1 || 1;

        // update state with the new 'order' object
        // Pass .setState() the piece of state you wish to update - key
        // Pass .setState() the variable you wish to update it to - value
        this.setState({ order: order });
    }
    
    removeFromOrder = (key) => {
        const order = {...this.state.order};
        delete order[key];
        this.setState({ order: order });
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
                                key={key} // this is a react thing in order for .map() to work; needs a unique value
                                index={key} // this is so we can pass the {key} via props to <Fish>
                                details={this.state.fishes[key]}
                                addToOrder={this.addToOrder}
                            />
                        ))}
                    </ul> 
                </div>
                <Order 
                    // methods are passed via props or state
                    fishes={this.state.fishes} 
                    order={this.state.order}
                    removeFromOrder={this.removeFromOrder} 
                />
                <Inventory 
                    // methods are passed via props or state
                    addFish={this.addFish} 
                    updateFish={this.updateFish}
                    deleteFish={this.deleteFish}
                    loadSampleFishes={this.loadSampleFishes}
                    fishes={this.state.fishes} 
                />
            </div>  

        );
    }
}

//Exporting Component
// * Components must be exported (also can be done on the same line when you create a component)
export default App;