import React from 'react';
import Login from './Login';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import base, { firebaseApp } from '../base';
import firebase from 'firebase';

export default class Inventory extends React.Component {

  state = {
    uid: null,
    owner: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = async authData => {
    // 1. Look up the current store in the database
    const store = await base.fetch(this.props.storeID, { context: this });

    // 2. Claim it if there is no owner
    if (!store.owner) {
      // save it as our own
      await base.post(`${this.props.storeID}/owner`, {
        data: authData.user.uid
      });
    }

    // 3. Set the state of the inventory component to reflect the current user
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    });
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ uid: null });
  }

  render() {
    const logout = <button onClick={this.logout}>Log Out!</button>

    // check if they are logged in 
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }

    // check if they are not the owner of the store
    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry, you are not the owner!</p>
          {logout}
        </div>
      )
    }

    // 3. They must be the owner
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {logout}
        {Object.keys(this.props.fishes).map( key => 
        <EditFishForm 
          key={key} 
          index={key}
          fish={this.props.fishes[key]}
          updateFish={this.props.updateFish}
          deleteFish={this.props.deleteFish} />)}
        <AddFishForm addFish={ this.props.addFish } />
        <button onClick={ this.props.loadSampleFishes }>Load Sample Fishes</button>
      </div>
    )
  }
}