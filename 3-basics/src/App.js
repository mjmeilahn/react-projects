import React, { Component, useState } from 'react';
import logo from './logo.svg';
import Input from './Input/Input';
import Message from './Message/Message';
import './App.css';

// FUNCTIONAL COMPONENT
// OTHERWISE KNOWN AS DISPLAY OR DUMB COMPONENTS
// function App () {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <Message/>
//       </header>
//     </div>
//   );
// }



// PRE REACT 16.8
// CLASS COMPONENT, NOTICE SYNTAX DIFFERENCES
// THESE COMPONENTS CAN CALL LIFECYCLE METHODS & USAGE OF STATE
class App extends Component {
  state = {
    buttonText: 'Click HERE',
    inputValue: '',
    messages: [
      { text: 'Hello World', nested: '' },
      { text: '2nd Message', nested: 'Nested content' }
    ]
  }

  changeText = newText => {
    // ALWAYS "setState", DO NOT USE this.buttonText = 'Changed!'
    // CHANGING STATE THIS WAY RE-RENDERS ALL COMPONENTS WITHIN CLASS
    // IN THE FUTURE, COPY STATE AND RETURN NEW STATE
    this.setState({
      buttonText: (typeof newText === 'string') ? newText : 'Changed!'
    });
  }

  changeValue = event => {
    // CHANGING STATE THIS WAY RE-RENDERS ALL COMPONENTS WITHIN CLASS
    // IN THE FUTURE, COPY STATE AND RETURN NEW STATE
    this.setState({
      inputValue: event.target.value
    });
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Input input={this.changeValue} val={this.inputValue}/>
          <h1>{this.state.inputValue}</h1>

          <button onClick={this.changeText}>{this.state.buttonText}</button>

          <Message text="Hello world" click={this.changeText}/>
          <Message text="2nd Message" click={this.changeText.bind(this, 'New message!')}>Nested content</Message>
        </header>
      </div>
    );
  }
}



// AFTER REACT 16.8, USING HOOKS AND NEW CALLS TO STATE "useState"
// funciton App () {
//   const [messageState, setMessageState] = useState({
//     messages: [
//       { text: 'Hello World', nested: '' },
//       { text: '2nd Message', nested: 'Nested content' }
//     ]
//   });

//   const [buttonState, setButtonState] = useState({
//     buttonText: 'Click HERE'
//   });

//   const changeText = newText => {
//     setButtonState({
//       buttonText: (typeof newText === 'string') ? newText : 'Changed!'
//     });
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>

//         <button onClick={changeText}>{buttonState.buttonText}</button>

//         <Message text="Hello world" click={changeText}/>
//         <Message text="2nd Message" click={changeText.bind(this, 'New message!')}>Nested content</Message>
//       </header>
//     </div>
//   );
// }

export default App;
