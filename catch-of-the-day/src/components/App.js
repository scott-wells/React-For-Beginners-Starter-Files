import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';


class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

    addFish = fish => {
       // 1. Take a copy of an existing state
       const fishes = {...this.state.fishes};
       // 2. Add our new fish to the fishes variable
       fishes[`fish${Date.now()}`] = fish;
       // 3. Set the new fishes object to state
       this.setState({ fishes });
    }

    loadSampleFishes = () => {
        alert('Loading Samples');
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                </div>
                <Order />
                <Inventory addFish={this.addFish } loadSampleFishes={this.loadSampleFishes} />
            </div>  
        )
    }
}

export default App;