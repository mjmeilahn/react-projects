import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

export default class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }

  componentDidMount() {
    // this lifecycle method is calling localStorage before
    // we have a result from firebase - manually checked in Order 
    // component as: if (!fish) return null;

    const { params } = this.props.match;
    // first reinstate our localStorage
    const localStorageRef = localStorage.getItem(params.storeID);
    
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    this.ref = base.syncState(`${params.storeID}/fishes`, {
      context: this,
      state: 'fishes'
    });
  }

  componentDidUpdate() {
    localStorage.setItem(this.props.match.params.storeID, JSON.stringify(this.state.order));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = fish => {
    // To update state anytime in React:
    // 1. Take a copy of the existing state
    const fishes = { ...this.state.fishes };

    // 2. Add our new fish to that "fishes" variable
    fishes[`fish${Date.now()}`] = fish;

    // 3. Set the new fishes object to state
    this.setState({ fishes });
  };

  updateFish = (key, updatedFish) => {
    // 1. Take a copy of the current state
    const fishes = {...this.state.fishes};

    // 2. Update that state
    fishes[key] = updatedFish;

    // 3. Set that to state
    this.setState({ fishes });
  };

  deleteFish = key => {
    // 1. Take a copy of state
    const fishes = {...this.state.fishes};

    // 2. Remove the fish
    fishes[key] = null;

    // 3. Update the state
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    // 1. Take a copy of state
    const order = {...this.state.order};

    // 2. Either add to order, or update the number in our order
    order[key] = order[key] + 1 || 1;

    // 3. Call setState to update our state object
    this.setState({ order });
  }

  deleteFromOrder = key => {
    // 1. Take a copy of state
    const order = {...this.state.order};

    // 2. Remove the line item in order
    delete order[key];

    // 3. Update the state
    this.setState({ order });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => 
            <Fish 
              key={key} 
              index={key}
              details={this.state.fishes[key]} 
              addToOrder={this.addToOrder} />)}
          </ul>
        </div>
        <Order 
          fishes={this.state.fishes} 
          order={this.state.order}
          deleteFromOrder={this.deleteFromOrder}/>
        <Inventory 
          addFish={this.addFish} 
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes} 
          fishes={this.state.fishes}
          storeID={this.props.match.params.storeID}/>
      </div>
    ) 
  };
}