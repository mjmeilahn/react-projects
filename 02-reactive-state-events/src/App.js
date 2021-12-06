import { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const App = () => {

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
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => {
      // RETURNED AS AN ARRAY SINCE WE ARE UPDATING AN ARRAY
      // EACH RETURN TYPE MUST 100% MATCH THE STATE'S DATA TYPE
      return [...prevExpenses, expense]
    })
  }

  // HOW JSX COMPILES UNDER THE HOOD
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // )

  // JSX IS RENDERED WITHIN PARENTHESIS OR ONE LINE ARROW FUNCTIONS
  return (
    <div>
      <NewExpense addingExpense={addExpense}/>
      <Expenses items={expenses} />
    </div>
  )
}

export default App