
import { useState, useRef } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import classes from './AddUser.module.css'

const AddUser = (props) => {
  const nameInputRef = useRef()
  const ageInputRef = useRef()
  const [error, setError] = useState()

  const addUserHandler = (event) => {
    event.preventDefault()

    // USE REFs TO LOOK AT A VALUE BEFORE COMMITTING TO STATE
    // OR LOGGING EVERY KEYSTROKE
    const enteredName = nameInputRef.current.value
    console.log(enteredName)

    const enteredUserAge = ageInputRef.current.value
    console.log(enteredUserAge)

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      })
      return
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      })
      return
    }
    props.onAddUser(enteredName, enteredUserAge)

    // YOU SHOULD RARELY USE MANUAL DOM MANIPULATION IN REACT
    // BUT HERE WE SIMPLY RESET VALUES AFTER A STATE UPDATE
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser
