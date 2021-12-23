import { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

// GLOBAL STATE - IN REAL LIFE CONNECT TO A DATABASE OR REDUX
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]


const App = () => {
  // IN THIS EXAMPLE, "DUMMY_EXPENSES" VARIABLE IS THE INITIAL STATE
  // "expenses" IS THE VALUE OF THE STATE
  // "setExpenses" IS THE FUNCTION TO SET NEW STATE
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpense = (expense) => {
    console.log(expense)
    setExpenses((prevExpenses) => {
      // 1. RETURNED AS AN ARRAY SINCE WE ARE UPDATING AN ARRAY
      // 2. EACH RETURN TYPE MUST 100% MATCH THE INITIAL STATE'S TYPE
      console.log([expense, ...prevExpenses])
      return [expense, ...prevExpenses]
    })
  }

  // HOW JSX COMPILES UNDER THE HOOD
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // )

  // JSX IS RENDERED WITHIN PARENTHESIS OR A ONE LINER RETURN
  // FOR PROCESS SAKE & PREDICTABILITY ALWAYS CHOOSE PARENTHESIS
  return (
    <div>
      <NewExpense addingExpense={addExpense}/>
      <Expenses items={expenses} />
    </div>
  )
}

export default App