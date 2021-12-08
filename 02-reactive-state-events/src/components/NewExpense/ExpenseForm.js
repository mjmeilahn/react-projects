
import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseForm = (props) => {

    // INITIAL LOCALIZED STATE IS AN EMPTY STRING

    // STATE UPDATES ONE-BY-ONE - RECOMMENDED FOR MOST COMPONENTS
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    // STATE UPDATES EVERY PARAMETER - DEPENDS ON USE-CASE
    // IF AN UPDATE REMOVES THE OTHER TWO IT WILL DELETE THEM
    // AND RETURNED AS NEW STATE
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    // EITHER UPDATE ONE PIECE OF STATE (COMMENTED) OR ALL STATE
    // BEST PRACTICE IS ONE PIECE OF STATE AT A TIME
    const titleChange = (event) => {

        // INDIVIDUAL STATE UPDATE - RECOMMENDED FOR MOST COMPONENTS
        setEnteredTitle(event.target.value)

        // SHARED STATE UPDATE - NOT RECOMMENDED
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })

        // IF YOU NEED PREVIOUS STATE LIKE AN INCREMENT COUNTER
        // PASS AN ANONYMOUS FUNCTION WITH "prevState" ARGUMENT
        // REACT HAS SCHEDULED STATE CHANGES WHERE THIS IS SAFER
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     }
        // })
    }
    const amountChange = (event) => {
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
    }
    const dateChange = (event) => {
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (enteredTitle.length && typeof enteredTitle === 'string' && enteredAmount > 0 && typeof enteredAmount === 'string' && enteredDate.length && typeof enteredDate === 'string') {
            const expenseData = {
                title: enteredTitle,
                amount: enteredAmount,
                date: new Date(enteredDate)
            }
            props.formSubmit(expenseData)
            setEnteredTitle('')
            setEnteredAmount('')
            setEnteredDate('')
        } else {
            alert('Not a valid form submission. Please try again.')
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChange}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountChange}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2021-01-01"
                        max="2022-12-31"
                        value={enteredDate}
                        onChange={dateChange}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm