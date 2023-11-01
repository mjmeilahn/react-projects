
import { useContext } from 'react'
import AuthContext from '../../store/authContext'
import classes from './Navigation.module.css'

const Navigation = () => {
  const context = useContext(AuthContext)
  return (
    <nav className={classes.nav}>
      <ul>
        {context.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <button onClick={context.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  )
  {/* <AuthContext.Consumer>
    {(context) => {
      return (
        <nav className={classes.nav}>
          <ul>
            {context.isLoggedIn && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {context.isLoggedIn && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {context.isLoggedIn && (
              <li>
                <button onClick={context.onLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
      )
    }}
  </AuthContext.Consumer> */}
}

export default Navigation
