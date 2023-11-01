import React from 'react';

export default class EditFishForm extends React.Component {
    handleChange = e => {
        // 1. Take a copy of the current fish
        const updatedFish = {
            ...this.props.fish,
            [e.currentTarget.name]: e.currentTarget.value
        };

        // 2. Pass the changes upstream to <Inventory/> Component 
        this.props.updateFish(this.props.index, updatedFish);
    }
    render() {
        return <div className="fish-edit">
            <input 
                type="text" 
                name="name" 
                onChange={this.handleChange}
                value={this.props.fish.name} />
            <input 
                type="text" 
                name="price" 
                onChange={this.handleChange}
                value={this.props.fish.price} />
            <select name="status" onChange={this.handleChange}>
                <option value="available">Fresh!</option>
                <option value="unavailable">Sold Out!</option>
            </select>
            <textarea 
                name="desc"  
                onChange={this.handleChange}
                value={this.props.fish.desc} />
            <input 
                type="text" 
                name="image" 
                onChange={this.handleChange}
                value={this.props.fish.image} />
            <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
        </div>;
    }
}