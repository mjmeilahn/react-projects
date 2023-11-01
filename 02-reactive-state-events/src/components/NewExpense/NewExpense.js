
import { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)

    const saveExpense = (formData) => {
        const expenseData = {
            ...formData,
            id: Math.random().toString()
        }
        props.addingExpense(expenseData)
        setIsEditing(false)
    }

    const startEditing = () => {
        setIsEditing(true);
    }

    return (
        <div className="new-expense">
            {!isEditing && (
                <button onClick={startEditing}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm formSubmit={saveExpense}/>
            )}
        </div>
    )
}

export default NewExpense