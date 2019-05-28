// Import Components
// * Must import React
import React from 'react';


// Create Component
class Fish extends React.Component {

    // Render Component to DOM
    // This is where we put our HTML for components and attach Props
    render() {
        return (

            <div className="single-fish">
                <p>FISH</p>
            </div>

        );
    }
}

//Export Component
// * Components must be exported (also can be done on the same line when you create a component)
export default Fish;