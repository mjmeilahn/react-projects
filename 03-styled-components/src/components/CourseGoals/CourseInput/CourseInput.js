import { useState } from 'react'
import styled from 'styled-components'
import Button from '../../UI/Button/Button'
import styles from './CourseInput.module.css'

// const FormControl = styled.div`
//   width: 100%;
//   margin: 0.5rem 0;

//   /* TABLET */
//   @media (min-width: 768px) {
//     width: auto;
//   }

//   & label {
//     color: ${props => (props.invalid ? 'red' : 'black')};
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
//     background: ${props => (props.invalid ? '#ffd7d7' : 'transparent')};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('')
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value)
  }

  const formSubmitHandler = event => {
    event.preventDefault()
    if (enteredValue.trim().length === 0) {
      setIsValid(false)
      return
    }
    props.onAddGoal(enteredValue)
  }

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl className={!isValid && 'invalid'} invalid={!isValid}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
        />
      </FormControl> */}
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`} invalid={!isValid}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  )
}

export default CourseInput
