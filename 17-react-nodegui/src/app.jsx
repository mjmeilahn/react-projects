
import React, { useState, useRef, useEffect, useReducer, useContext } from 'react'
import { Window, hot, View, Text, Button, useEventHandler, PlainTextEdit, LineEdit } from '@nodegui/react-nodegui'
import { QIcon } from '@nodegui/nodegui'
import nodeguiIcon from '../assets/nodegui.jpg'

const minSize = { width: 500, height: 520 }
const winIcon = new QIcon(nodeguiIcon)

const emailReducer = (state, action) => {
  if (action.type === 'EMAIL_SUBMIT') {
    return {
      value: action.value,
      isValid: action.value.includes('@') // IN A REAL APP THIS WOULD BE A FUNCTION HANDLER WITH VALIDATION LOGIC
    }
  }
  return {
    value: '',
    isValid: false
  }
}

const App = () => {
  const [count, setCount] = useState(0)
  const textInputRef = useRef()
  const emailInputRef = useRef()
  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: false})

  const buttonHandler = useEventHandler({
    clicked: () => setCount(prevCount => prevCount += 1)
  }, [])

  const emailSubmitHandler = useEventHandler({
    clicked: () => {
      console.log('Validate Email Logic')
    }
  }, [])

  useEffect(() => {
    if (count !== 0) {
      console.log('Count is higher than its initial state.')
    }

    const text = textInputRef.current.toPlainText()
    if (text.length) {
      console.log('Text Input Ref: ' + text)
    }
  }, [count, textInputRef])

  return (
    <Window
      windowIcon={winIcon}
      windowTitle=''
      minSize={minSize}
      styleSheet={styleSheet}
    >
      <View id="container">
        <Text>{count}</Text>
        <Button on={buttonHandler} text={'Increase Count'} cursor={13} />
        <PlainTextEdit ref={textInputRef} placeholderText={'Type any text here...'} />
        <LineEdit placeholderText={'Type your email'} ref={emailInputRef} />
        <Button on={emailSubmitHandler} text={'Submit Email'} cursor={13} />

        {emailState.isValid && <Text>Email is valid!</Text>}
        {!emailState.isValid && <Text>Email is not valid!</Text>}
      </View>
    </Window>
  )
}

const styleSheet = `
* {
  font-size: 20px;
  font-weight: 700;
}

#container {
  padding: 15px;
}

QPlainTextEdit {
  height: 100px;
  margin-bottom: 10px;
}

QLineEdit {
  padding: 10px 0;
}

QPushButton {
  color: #ffffff;
  background-color: #4885ed;
  padding: 15px 0;
}

QLineEdit, QPushButton, QPlainTextEdit {
  width: 300px;
}
`

export default hot(App)
