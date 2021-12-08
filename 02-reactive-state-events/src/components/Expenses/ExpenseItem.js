import { useState } from 'react'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  // ASSIGN VALUE & UPDATE FUNCTION NAMES TO LOCAL STATE MANAGEMENT
  const [ title, setTitle ] = useState(props.title)

  const changeTitle = () => {
    setTitle('Updated')
    console.log(title)
  }

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={changeTitle}>Change Title</button>
      </Card>
    </li>
  )
}

export default ExpenseItem