import React from 'react';

class EditFishForm extends React.Component {

    // fires when a change is made to an input
    handleChange = (event) => {

        // make an 'updatedFish' to update state with
        const updatedFish = {

            // make a copy of current state with the spread operator
            ...this.props.fish,

            // overwrite the target current input (via name="####") with the new target value (*square brackets [])
            [event.currentTarget.name]: event.currentTarget.value
        };

        // send everything upstream to 'App' with updateFish()
        this.props.updateFish(this.props.index, updatedFish);
    }

    render() {
        return (
            <div className="fish-edit">
                {/* each input is given an onChange event so we can input directly into the form and update state */}
                {/* each input is given a value via props - VALUE ON AN INPUT WILL NOT WORK WITHOUT AN ONCHANGE EVENT */}
                <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name} />
                <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price} />
                <select type="text" name="status" onChange={this.handleChange} value={this.props.fish.status}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc} />
                <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image} />
                <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
            </div>
        );
    }
}

export default EditFishForm;