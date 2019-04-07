// Import Components
// * Must import React first
// Can use methods from other Components - { getFunName }
import React from 'react';
import { getFunName } from '../helpers';

// Creating React Component
// A React Component is a type of inheritable class
class StorePicker extends React.Component {
    myInput = React.createRef(); 

    // Component Methods
    // Actually a property set to the component
    goToStore = event => {

        // 1. Stop form from submitting
        event.preventDefault();

        // 2. Get the text from that input
        const storeName = this.myInput.current.value;

        // 3. Change the page to /store/whatever-they-entered
        // Change page to new URL without having to reload
        this.props.history.push(`/store/${storeName}`);
    };

    // Render Component to DOM
    // Components must be rendered to be visible on the DOM
    // This is where we put our HTML for components and attach Props
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input 
                    type="text" 
                    ref={this.myInput}
                    required 
                    placeholder="Store Name" 
                    defaultValue={getFunName()} 
                />
                <button type="submit">Visit Store -></button>
            </form>
        )
    }
}

//Exporting Component
// * Components must be exported (also can be done on the same line when you create a component)
export default StorePicker;