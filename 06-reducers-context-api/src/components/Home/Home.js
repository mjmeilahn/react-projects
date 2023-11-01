
import { useContext } from 'react'
import AuthContext from '../../store/authContext'
import Card from '../UI/Card/Card'
import Button from '../UI/Button/Button'
import classes from './Home.module.css'

const Home = (props) => {
  const context = useContext(AuthContext)
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={context.onLogout}>Logout</Button>
    </Card>
  )
}

export default Home
