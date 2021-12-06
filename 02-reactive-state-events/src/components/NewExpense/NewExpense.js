
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const saveExpense = (formData) => {
        const expenseData = {
            ...formData,
            id: Math.random().toString()
        }
        props.addingExpense(expenseData)
    }

    return (
        <div className="new-expense">
            <ExpenseForm formSubmit={saveExpense}/>
        </div>
    )
}

export default NewExpense