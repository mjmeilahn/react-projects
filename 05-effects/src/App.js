import { useState, useEffect, Fragment } from 'react'

import Login from './components/Login/Login'
import Home from './components/Home/Home'
import MainHeader from './components/MainHeader/MainHeader'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // useEffect() WITHOUT ANY DEPENDENCIES (empty array)
  // THIS RUNS ONLY ONCE
  useEffect(() => {
    const localStorageLogged = localStorage.getItem('isLoggedIn')
    if (localStorageLogged === '1') {
      setIsLoggedIn(true)
    }
  }, [])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But this is just for demo purposes
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true)
  }

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
  }

  return (
    <Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </Fragment>
  )
}

export default App
