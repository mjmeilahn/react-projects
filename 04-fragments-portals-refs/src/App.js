import { useState } from 'react'

import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ]
    })
  }

  return (
    // BELOW IS SHORT HAND FOR <React.Fragment>
    // WHICH COULD BE DESCTRUCTURED AS import { Fragment } from 'react'
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  )
}

export default App
