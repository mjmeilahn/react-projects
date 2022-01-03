
import { useState } from 'react'

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [nameTouched, setNameTouched] = useState(false)

  const nameIsValid = enteredName.trim() !== ''
  const nameInputIsInvalid = !nameIsValid && nameTouched

  let formIsValid = false

  if (nameIsValid) {
    formIsValid = true
  }

  const nameChange = event => {
    setEnteredName(event.target.value)
  }

  const nameBlur = event => {
    setNameTouched(true)
  }

  const submitForm = event => {
    event.preventDefault()

    setNameTouched(true)
    if (!nameIsValid) {
      return
    }
    console.log(enteredName)
    setEnteredName('')
    setNameTouched(false)
  }

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={submitForm}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChange}
          onBlur={nameBlur}
          value={enteredName}
        />
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
