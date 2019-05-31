import React from 'react';
import { formatPrice } from "../helpers";

class Order extends React.Component {

    renderOrder = key => {

        // this function prints info about the 'fish[key]' in the <ul>
        // variables are 'key', 'fish', 'count' and 'isAvailable'
        // if 'fishes' doesn't exist on page load, don't show anything in 'order'
        // if 'isAvailable' is true then 'fish[key]' is 'available'
        // if 'isAvailable' is not true then print message
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish && fish.status === "available";
        if(!fish) return null;
        if(!isAvailable) {
            return (
                <li key={key}>
                    Sorry {fish ? fish.name : "fish"} is no longer available
                </li>
            );
        }
        return (
            <li key={key}>
                {count} lbs {fish.name}
                {formatPrice(count * fish.price)}
            </li>
        );
    };

    render() {
        
        // we need to talley up the number of our order
        // 'order' state is an object, so we need Object.keys to make it an array of keys
        const orderIds = Object.keys(this.props.order);

        // this function creates our order total
        // we take in our orderIds (*see above) & .reduce() over the array
        // if the 'fish[key]' is available, return our running total plus the count times the price
        // otherwise, return just the running total - prevTotal
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available';
            if(isAvailable) {
                return prevTotal + (count * fish.price);
            }
            return prevTotal;
        }, 0);

        return (
            <div className="order-wrap">
                <h2>Order</h2>
                {/* create a list of items added to the order */}
                <ul className="order">{orderIds.map(this.renderOrder)}</ul>
                <div className="total">
                    Total:
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        );
    }
}

export default Order;