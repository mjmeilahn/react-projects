
import { Fragment, useState, useEffect, Component } from 'react'
import UsersContext from '../store/users-context'
import Users from './Users'
import classes from './UserFinder.module.css'

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
]

class UserFinder extends Component {
  // ONLY ONE CONTEXT TYPE IS ALLOWED PER CLASS COMPONENT
  // static contextType = UsersContext

  constructor() {
    super()
    this.state = {
      filteredUsers: DUMMY_USERS,
      searchTerm: ''
    }
  }

  // TYPICALLY WE WILL NOT HAVE "DUMMY_USERS" HARD CODED
  // FETCH THEM WITH componentDidMount()

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) => user.name.includes(this.state.searchTerm))
      })
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    )
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS)
//   const [searchTerm, setSearchTerm] = useState('')

//   useEffect(() => {
//     console.log(DUMMY_USERS.filter((user) => user.name.includes(searchTerm)))
//     console.log(searchTerm)
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     )
//   }, [searchTerm])

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value)
//   }

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type='search' onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   )
// }

export default UserFinder