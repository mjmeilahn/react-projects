
import UserFinder from './components/UserFinder'
import UsersContext from './store/users-context'

// CLASS COMPONENTS MUST ALWAYS IMPORT "Component" FROM REACT.
// EACH TIME IT MUST EXTEND "Component" CLASS.
// e.g. class Person extends Component{}
// EACH constructor() MUST CALL super() TO INHERIT Component ATTRIBUTES.

// CLASS COMPONENTS MUST NAME THEIR STATE AS "this.state"
// UNLIKE HOOKS, THEIR DATA TYPE MUST BE AN OBJECT.
// BUT HOOKS CAN USE ANY DATA TYPE AS ITS STATE.

// FUNCTIONAL HOOKS TRANSLATION TO CLASS LIFECYCLE METHODS
// useEffect(..., []) ---> componentDidMount()
// useEffect(..., [args]) ---> componentDidUpdate()

// CLASS COMPONENTS MUST BIND METHODS TO THE CLASS INSTANCE
// IN DOM EVENTS e.g. onClick={this.randomFunction.bind(this)}
// VS. FUNCTIONAL COMPONENTS e.g. onClick={randomFunction}

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
]


function App() {
  const usersContext = {
    users: DUMMY_USERS
  }

  return (
    <div>
      <UsersContext.Provider value={usersContext}>
        <UserFinder />
      </UsersContext.Provider>
    </div>
  )
}

export default App
