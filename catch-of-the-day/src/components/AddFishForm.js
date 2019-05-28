// Import Components
// * Must import React first
import React from 'react';

// Creating React Component
// A React Component is a type of inheritable class
class AddFishForm extends React.Component {

    // Create Refs - references are used to bind the variables to form inputs
    // allows us to use 'this.' and refer to the component
    // targets the specific <input> in the <form>
    nameRef = React.createRef(); 
    priceRef = React.createRef(); 
    statusRef = React.createRef(); 
    descRef = React.createRef(); 
    imageRef = React.createRef(); 

    // Component Methods
    // Actually a property set to the component
    // Method is passed an 'event' when the <form> submits - 'onSubmit'
    createFish = event => {

        // prevent <form> from auto-submitting
        event.preventDefault();
        console.log(this.nameRef.current.value);

        // Each key is passed the current value of the ref variable
        // ref variable is declared above & bound to an input below, as well as in this object
        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value), // parseFloat changes string to float
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        }
        
        // this 'addFish' prop is a method that lives in App.js
        // this is where the handoff occurs - we pass the fish object via props
        this.props.addFish(fish);

        // refresh the fish form
        event.currentTarget.reset();
    }

    // Render Component to DOM
    // this is where we put our HTML for components and attach Props
    render() {
        return (

            // 'onSubmit' fires createFish() when the '+ Add Fish' button is clicked
            // each input has a variable bound to it via Refs - declared above
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

        );
    }
}

//Exporting Component
// * Components must be exported (also can be done on the same line when you create a component)
export default AddFishForm;