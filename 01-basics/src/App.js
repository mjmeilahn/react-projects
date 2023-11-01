
import ExpenseItem from "./components/Expense/ExpenseItem"
import Card from "./components/UI/Card"

function App() {

  // GLOBAL STATE
  // FUTURE PROJECTS CONNECT VIA CONTEXT API OR REDUX
  const expenses = [
    {
      title: 'Car Insurance',
      amount: 297.35,
      date: new Date(2021, 3, 4)
    },
    {
      title: 'New TV',
      amount: 350.13,
      date: new Date(2021, 2, 5)
    },
    {
      title: 'Phone Bill',
      amount: 27.00,
      date: new Date(2021, 5, 6)
    }
  ]

  // JSX IS ALWAYS RENDERED WITH PARENTHESIS OR AN ARROW FUNCTION
  return (
    <div>
      <h2>Hello World</h2>
      <Card className="expenses">
        {expenses.map((expense, i) => (
          <ExpenseItem key={i} title={expense.title} amount={expense.amount} date={expense.date}/>
        ))}
      </Card>
    </div>
  )
}

export default App
