// Import Components
// * Must import React first
import React from 'react';

// Creating React Component
// A React Component is a type of inheritable class
class AddFishForm extends React.Component {

    // Create Refs - references are used to bind the variables to form inputs
    // Allows us to use 'this.' and refer to the component
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    // Component Methods
    // Actually a property set to the component
    // Method is passed an 'event' which is triggered when the form submits - onSubmit
    createFish = (event) => {

        // 1. Prevent form from auto submitting
        event.preventDefault();

        // 2. Make a fish object
        // Each key is passed the current value of the referenced variable
        // That variable is declared above and bound to an input below, as well as in this object
        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        }

        // 3. Pass the fish object to props
        // This 'addFish' prop is a method that lives in App.js
        // This is where the handoff occurs - we pass the fish object
        this.props.addFish(fish);

        // 4. Refresh the fish form
        event.curretTarget.reset();

    }

    // Render Component to DOM
    // Components must be rendered to be visible on the DOM
    // This is where we put our HTML for components and attach Props
    render() {
        return (
            // onSubmit fires the createFish method when the '+ Add Fish' button is clicked
            // Each input has a variable bound to it via Refs - declared above
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
                <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>  
                </select>
                <textarea name="desc" ref={this.descRef} placeholder="Desc" />
                <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
                <button type="submit">+ Add Fish</button>
            </form>
        )
    }
}

//Exporting Component
// * Components must be exported (also can be done on the same line when you create a component)
export default AddFishForm;