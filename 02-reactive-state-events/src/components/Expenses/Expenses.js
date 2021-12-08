
import { useState } from 'react'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = (props) => {
  const { items } = props
  const [filteredYear, setFilteredYear] = useState('2021')

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
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  )
}

export default Expenses
