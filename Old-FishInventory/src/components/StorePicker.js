import React, { Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = e => {
    e.preventDefault();
    const inputVal = this.myInput.value.value;
    this.props.history.push(`/store/${ inputVal }`);
  }

  render() {
    return (
      <Fragment>
      {/* A Fragment encapsulator allows DOM siblings to be rendered - and removes the encapsulator itself after compilation */}
      <form className="store-selector" onSubmit={this.goToStore} >
        <h2>Please Enter a Store</h2>
        <input 
        type="text" 
        ref={ this.myInput }
        required 
        placeholder="Store Name" 
        defaultValue={ getFunName() } />
        <button type="submit">Visit Store</button>
      </form>
      </Fragment> 
    )
  }
}

export default StorePicker;