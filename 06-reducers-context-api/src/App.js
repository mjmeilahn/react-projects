
import { Fragment, useContext } from 'react'
import AuthContext from './store/authContext'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import MainHeader from './components/MainHeader/MainHeader'

function App() {
  const context = useContext(AuthContext)
  return (
    <Fragment>
      <MainHeader/>
      <main>
        {!context.isLoggedIn && <Login/>}
        {context.isLoggedIn && <Home/>}
      </main>
    </Fragment>
  )
}

export default App
