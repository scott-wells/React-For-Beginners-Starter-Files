// Import Components
// * Must import React first
import React from 'react';

//import custom function from file
import { getFunName } from "../helpers";

// this is a component
class StorePicker extends React.Component {

    // ref is similar to state; allows us to target a DOM node
    myInput = React.createRef(); 

    // function being used in the <form>
    // *is a property - NOT a method - with an arrow function (weird React quirk)
    goToStore = event => {
        
        // stops <form> from submitting & refreshing a new page
        event.preventDefault(); 
        
        // assigns the value of the ref, 'myInput', which targets the <form>
        const storeName = this.myInput.current.value;
        
        // this is a tricky one that doesn't work in all cases
        // component 'Storepicker' is somehow being passed props from React 'Router'
        // we can use .push() on that prop to route us to a new URL
        // .push() appends the template literal to the URL and routes us there
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        
        return ( 
        // parentheses allow for cleaner indentation
        // cannot put sibling tags in render(); tags must be enclosed; <Fragment></Fragment>

            // 'onSubmit' is an event triggered on the <form>
            // we give it a value of 'this.functionName'
            <form className="store-selector" onSubmit={this.goToStore}> 
                <h2>Please Enter A Store</h2>
                <input 
                    type="text" 
                    ref={this.myInput} // targeting this <input> as 'myInput'
                    required 
                    placeholder="Store Name" 
                    // used a custom function as the value of 'defaultValue'
                    // dynamically loads a silly name on page load; 'getFunName()'
                    defaultValue={getFunName()} 
                />
                <button type="submit">Visit Store</button>
            </form>
        
        );
    }
}

// *you MUST export your component to use elsewhere
export default StorePicker;