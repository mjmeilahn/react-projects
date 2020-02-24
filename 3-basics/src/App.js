import React, { Component } from 'react';
import logo from './logo.svg';
import Message from './Message/Message';
import './App.css';

// FUNCTIONAL COMPONENT
// OTHERWISE KNOWN AS DISPLAY OR DUMB COMPONENTS
// function App() {
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


// CLASS COMPONENT, NOTICE SYNTACTICAL DIFFERENCES
// THESE TYPES OF COMPONENTS CAN CALL LIFECYCLE METHODS
class App extends Component {
  state = {
    buttonText: 'Click HERE',
    messages: [
      { text: 'Hello World', nested: '' },
      { text: '2nd Message', nested: 'Nested content' }
    ]
  }

  changeText = () => {
    this.setState({
      buttonText: 'Changed!'
    });
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <button onClick={this.changeText}>{this.state.buttonText}</button>

          <Message text="Hello world"/>
          <Message text="2nd Message">Nested content</Message>
        </header>
      </div>
    );
  }
}

export default App;
