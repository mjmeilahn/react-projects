import React from 'react';
import PropTypes from 'prop-types';

export default class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  static propTypes = {
    addFish: PropTypes.func.isRequired
  };

  createFish = e => {
    e.preventDefault();
    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value,
    };
    
    // Add the fish
    this.props.addFish(fish);

    // Refresh the form
    e.currentTarget.reset();
  }

  render() {
    return (
      <form className="fish-edit" onSubmit={ this.createFish }>
        <input name="name" ref={ this.nameRef } placeholder="Name" type="text"/>
        <input name="price" ref={ this.priceRef } placeholder="Price" type="text"/>
        <select name="status" ref={ this.statusRef }>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" ref={ this.descRef } placeholder="Desc" />
        <input name="image" ref={ this.imageRef } placeholder="Image" type="text"/>
        <button type="submit">Add Fish</button>
      </form>
    )
  }
}