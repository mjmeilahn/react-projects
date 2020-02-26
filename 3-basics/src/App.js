import React, { Component, useState } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import Input from './Input/Input';
import Message from './Message/Message';
import './App.css';

const Button = styled.button`
  background-color: #4885ed;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;

  @media (min-width: 360px) {
    padding: 10px 30px;
  }
`;


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
    inputValue: 'two-way data binding',
    messages: [
      { text: 'Hello World', nested: '', newMessage: 'Changed!' },
      { text: '2nd Message', nested: 'Nested content', newMessage: 'New message!' }
    ]
  }

  changeButton = newText => {
    // ALWAYS "setState", DO NOT USE this.buttonText = 'Changed!'
    // CHANGING STATE THIS WAY RE-RENDERS ALL COMPONENTS WITHIN CLASS
    // IN THE FUTURE, COPY STATE AND RETURN NEW STATE
    this.setState({
      buttonText: (typeof newText === 'string') ? newText : 'Clicked!'
    });
  }

  changeMessage = index => {

    // COPY MESSAGE TO CHANGE IMMUTABLY
    const message = {
      ...this.state.messages[index]
    }

    // MAKE THE CHANGE
    message.text = message.newMessage;

    // COPY ALL MESSAGES
    const messages = [...this.state.messages];

    // UPDATE MESSAGE IN ARRAY
    messages[index] = message;

    // SET NEW STATE
    this.setState({
      messages
    });
  }

  deleteMessage = index => {
    // OR USE SPREAD OPERATOR E.G. ...this.state.messages
    const messages = this.state.messages.slice();
    messages.splice(index, 1);

    this.setState({
      messages
    });
  }

  changeInput = event => {
    // CHANGING STATE THIS WAY RE-RENDERS ALL COMPONENTS WITHIN CLASS
    // IN THE FUTURE, COPY STATE AND RETURN NEW STATE
    this.setState({
      inputValue: event.target.value
    });
  }

  render () {
    let assignedClasses = [];

    if (this.state.messages.length <= 2) {
      assignedClasses.push('bold', 'red');
    }

    assignedClasses = assignedClasses.join(' ');

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Input input={this.changeInput} val={this.state.inputValue}/>
          <h1 className={assignedClasses}>{this.state.inputValue}</h1>

          <Button onClick={this.changeButton}>
            {this.state.buttonText}
          </Button>
          {/* <button onClick={this.changeButton}>{this.state.buttonText}</button> */}

          {this.state.messages.map((message, i) => {
            return <Message
              key={'message_' + i}
              text={message.text}
              changeTitle={this.changeMessage.bind(this, i)}
              click={this.changeButton.bind(this, message.newMessage)}
              delete={this.deleteMessage.bind(this, i)}>
                {message.nested.length > 0 ? message.nested : ''}
            </Message>
          })}
        </header>
      </div>
    );
  }
}



// AFTER REACT 16.8, USING HOOKS AND NEW CALLS TO STATE "useState"
// funciton App () {
//   const [buttonState, setButtonState] = useState({
//     buttonText: 'Click HERE'
//   });

//   const changeButton = newText => {
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

//         <button onClick={changeButton}>{buttonState.buttonText}</button>

//         <Message text="Hello world" click={changeButton}/>
//         <Message text="2nd Message" click={changeButton.bind(this, 'New message!')}>Nested content</Message>
//       </header>
//     </div>
//   );
// }

export default App;
