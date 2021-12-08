import { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = (props) => {
  const { items } = props
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChange = (year) => {
    setFilteredYear(year)
  }

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChange}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  )
}

export default Expenses